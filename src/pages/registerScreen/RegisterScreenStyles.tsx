import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  display: flex;
`;

export const ContentAsideForm = styled.div`
  margin-left: 200px;
  width: 600px;
  height: auto;
`;

export const BoxLogo = styled.div`
margin-left:25%;
`;

export const ImgLogo = styled.img`
width:15%;
`;

export const BoxForm = styled.div``;

export const BoxInstruct = styled.div``;

export const TextWelcome = styled.p`
  padding-left: 20%;
  color: #252f40;
  font-size:16px;
  font-weight: 800;
`;

export const LabelForm = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  font-weight: 100;
  color: #252f40;
`;

export const BoxInput = styled.div``;

export const InputForm = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  padding-left: 15px;
  border: 1px solid #cccc;
  outline: none;
  color: #cccc;
  border-radius: 15px;
  height: 30px;
  width: 400px;
`;

export const InputFormPass = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  padding-left: 15px;
  border: 1px solid #cccc;
  outline: none;
  color: #cccc;
  border-radius: 15px;
  height: 30px;
  width: 400px;

  background-image: url("../../assets/TelaCadastro/eye.svg");
  background-position: 95% center;
  background-repeat: no-repeat;
  background-size: 25px 20px;
  opacity: 0.9;
`;

export const BoxLabel = styled.div`
  padding-left: 10px;
`;

export const BoxButton = styled.div`
  padding-top: 20px;
`;

export const ButtonForm = styled.button`
  width: 400px;
  font-size: 16px;
  border: none;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 8px;
  margin-bottom:5%;
  border-radius: 10px;
  background-color: #24126A;
  color: #FFFF;
  font-weight: 800;
`;

export const ContentIllustration = styled.div`
  margin-left: 70px;
  height: auto;
`;

export const ImgIllustration = styled.img`
  height:800px;
   width:550px;
  padding:0;
  margin:0;

  @media (min-width: 1500px) {
    height:800px;
     width:400px;
  }
  @media (max-width: 1200px) {
    height:800px;
    width:350px;
  }
  @media (max-width: 1150px) {
  heigh:700px;
  width:300px;
  }
   @media (max-width: 768px) {
    display:none;
  }
`;

export const BoxAccount = styled.div`
  margin-bottom:2%;
  margin-left:20%;
`;

export const TextAccount = styled.span`
  color: #252f40;
  font-size:16px;
  @media (max-width: 768px) {
    text-align: center;
    white-space: nowrap;
  }
`;

export const TextAccountBold = styled.a`
  color: #252f40;
  font-weight: 800;
  font-size:16px;
  text-decoration: none;
`;

