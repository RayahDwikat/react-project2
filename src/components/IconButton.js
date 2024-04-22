import styled from "styled-components";

export function IconButton({iconName, onClick}){
    
    return(
        <>
          <ion-icon name={iconName} onClick={onClick}></ion-icon>
        </>
    );
}