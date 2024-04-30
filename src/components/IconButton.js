import styled from "styled-components";

export function IconButton({iconName, onClick , style}){
    
    return(
        <>
          <ion-icon name={iconName} onClick={onClick} style={style}></ion-icon>
        </>
    );
}