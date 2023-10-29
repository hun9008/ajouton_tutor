import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import './submit.css';
import axios from 'axios';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      selectedFiles: [],
      fileAttached: false,
      title: "", // 학번
      description: "" ,// 학습 내용
      randomString: props.randomString
    };
    
  }

  handleUploadClick = () => {
    this.fileInput.current.click();
  };

  
  handleFileChange = (e) => {
    
    const files = e.target.files;
    const selectedFiles = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let reader = new FileReader();
      reader.onloadend = () => {
        selectedFiles.push({ 
          name: file.name, 
          base64: reader.result.split(',')[1],  // base64 인코딩된 파일 데이터 추가
          lastModifiedDate: file.lastModifiedDate.toLocaleDateString(),
          size: (file.size / 1024).toFixed(2) + ' KB'
        });
        this.setState({ selectedFiles, fileAttached: true });
      };
      reader.readAsDataURL(file);
    }
  
    e.target.value = null;
  };
  

readFileAsText = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file, 'UTF-8');
  });
};

  
  handleFileRemove = (indexToRemove) => {
    this.setState(prevState => ({
      selectedFiles: prevState.selectedFiles.filter((_, index) => index !== indexToRemove)
    }));
  };

  // 새 창에서 미리보기 URL 열기
  handleFileClick = (previewURL) => {
    console.log("Clicked:", previewURL);  // 이 부분 추가
    window.open(previewURL, '_blank');
  };

  // 저장 버튼 클릭 이벤트
  handleSaveClick = () => {
    const currentDate = new Date();  // 현재 날짜와 시간을 얻습니다.
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    

    const formattedDate = `${year}-${month}-${day}` 
    const formattedTime = `${hours}:${minutes}`;  // 'YYYY-MM-DD HH:MM:SS' 형식으로 날짜와 시간을 출력합니다.

    console.log("저장된 날짜와 시간:", formattedDate, formattedTime);
    const filesData = this.state.selectedFiles.map(file => file.base64);

    axios.post('https://pass.kksoft.kr:15823/v1/api/servey', {
      title: this.state.title,
      description: this.state.description,
      files: filesData,
      randomString: this.state.randomString,
    }) 
    .then(response => {
      console.log("Data submitted successfully:", response.data);
    })
    .catch(error => {
      console.error("Error submitting data:", error);
    });
    // 저장 로직 추가
  };

  handleTitleChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9]/g, ''); // 숫자가 아닌 모든 문자 제거
    this.setState({ title: filteredValue });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { selectedFiles } = this.state;
    const isFormFilled = this.state.title.trim() !== "" && this.state.description.trim() !== "";
    return (
      <div className="container">
        <h2>튜터링 활동 기록</h2>
        <p>튜티는 매 튜터링 활동이 끝날때마다 튜터링 활동 기록을 작성해야 합니다. 효율적인 튜터링 활동을 위한 것이니 성실하게 작성해주시길 바랍니다.</p>
        
        {/* 제목 섹션 */}
        <div className="section">
          <label>학번</label>
          <input 
            type="text" 
            placeholder="학번을 입력하세요"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>

        {/* 설명란 섹션 */}
        <div className="section">
          <label>학습 내용</label>
          <textarea 
            placeholder="오늘 튜터링을 통해서 학습한 내용에 대해 간략하게 정리해주세요"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          ></textarea>
        </div>

        {/* 첨부파일 섹션 */}
        <div className="section">
          <label>활동 사진</label>
          <div className="file-display-container">
            <div className="file-display">
              {selectedFiles.length > 0 ? (
                selectedFiles.map((file, index) => (
                  <div key={index} className="file-item">
                    <div 
                      className="file-name"
                      onClick={() => this.handleFileClick(file.previewURL)}
                    >
                      <img src="/images/file_image.svg" alt="Description" />
                      {file.name}
                    </div>
                    <span className="file-details">
                      (마지막 수정일자: {file.lastModifiedDate}, 용량: {file.size})
                    </span>
                    <button 
                      className="remove-button" 
                      onClick={() => this.handleFileRemove(index)}
                    >
                      X
                    </button>
                  </div>
                ))
              ) : (
                <div className="file-placeholder">오늘 튜터링 활동할 사진을 찍어서 업로드해주세요</div>
              )}
            </div><button className="absolute-button" onClick={this.handleUploadClick}>사진 촬영</button>
          </div>
          <input
            type="file"
            ref={this.fileInput}
            onChange={this.handleFileChange}
            className="file-input"
            multiple
            style={{ display: 'none' }}
          />
        </div>
        <div className="actions">
          {(isFormFilled) & (selectedFiles.length) > 0 ? 
            <button className="button-save-enabled" onClick={this.handleSaveClick}>저장</button> :
            <button className="button-save-disabled">저장</button>
          }
        </div>
      </div>
    );
  }
}

export default Submit;