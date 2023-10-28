import React, { Component } from 'react';
import Button from './button';
import './submit.css';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      selectedFiles: [],
      fileAttached: false
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
      const previewURL = URL.createObjectURL(file);
      selectedFiles.push({ 
        name: file.name, 
        previewURL,
        lastModifiedDate: file.lastModifiedDate.toLocaleDateString(),
        size: (file.size / 1024).toFixed(2) + ' KB'
      });
    }
    this.setState({ selectedFiles, fileAttached: true });
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
    console.log("저장 버튼 클릭됨");
    // 저장 로직 추가
  };

  render() {
    const { selectedFiles } = this.state;

    return (
      <div className="container">
        <h2>튜터링 활동 만족도 조사</h2>
        <p>이 설문조사는 매 튜터링 활동이 끝날때마다 작성하는 것입니다. 효율적인 튜터링 활동 일지를 위한 것이니 성실하게 작성해주시길 바랍니다.</p>
        
        {/* 제목 섹션 */}
        <div className="section">
          <label>학번</label>
          <input 
            type="text" 
            placeholder="학번을 입력하세요"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        {/* 설명란 섹션 */}
        <div className="section">
          <label>학습 내용</label>
          <textarea placeholder="오늘 튜터링을 통해서 학습한 내용에 대해 간략하게 정리해주세요"></textarea>
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
            </div>
            <Button className="absolute-button" onClick={this.handleUploadClick}>사진 촬영</Button>
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
        </div>
      </div>
    );
  }
}

export default Submit;