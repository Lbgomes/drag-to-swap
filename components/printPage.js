import { useState } from "react";
import styled from "styled-components";
import Actions from "./actions";


const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  color: #585858;
  @media(min-width: 650px){
      width: 600px;
  }
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #2778a5;
  justify-content: center;
  border-radius: 8px;
  margin: 17px 0 42px;
  padding: 1rem;
  gap: 1rem;

`;
const PrintPhoto = styled.div`
  img {
    border-radius: 4px;
    max-width: 100%;
  }
`;


export default function PrintPage({data}) {

    const [state, setState] = useState(data)
        const [newState, setNewState] = useState()

      const dropWord = (event, item) => {
        let tempDropImg = item.src;
        let tempDragImg = newState.dragImgSrc;
        setState({
          dropImgSrc: item.src,
          arr: state.arr.map(el => {
            if (el.src === tempDropImg) return { ...el, src: tempDragImg };
            if (el.src === tempDragImg) return { ...el, src: tempDropImg };
            return el;
          })
        });
      }
    
      return (
        <>
        <Wrapper>
            <PrintWrapper >
                <Header>
                    <Title>Front Print</Title>
                    <Actions />
                </Header>
            <PageLayout>
            {state.arr?.map(item => {
                return (
                    <PrintPhoto onDrop={(event) => dropWord(event, item)} onDragOver={(event) => event.preventDefault()} onDragStart={() => setNewState({ dragImgName: item.name, dragImgSrc: item.src })} key={item.name}>
                        <img src={item.src} alt={item.name} />
                    </PrintPhoto>
                );
            })}
        </PageLayout>
        </PrintWrapper>
        </Wrapper>
        </>
      );
}
