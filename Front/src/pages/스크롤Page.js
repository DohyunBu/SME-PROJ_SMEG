import styled from "styled-components";


const Scrolltest = styled.div`
  width : 200px;
  height : 100px;
  overflow-y: scroll;
`;
          


const 스크롤Page = () => {
  return (
    <Scrolltest>
      <p>Scrollbar Test! <br/> 
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test! <br/>
      Scrollbar Test!</p>
    </ Scrolltest>
    
  );
};

export default 스크롤Page;
