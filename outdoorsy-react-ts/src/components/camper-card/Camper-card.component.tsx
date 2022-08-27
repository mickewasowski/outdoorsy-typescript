import {Wrapper,ImageContainer,Image, Heading} from './Camper-card.styles';

function CamperCard({image, heading}){

    return(
        <Wrapper>
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <div>
                <Heading>{heading}</Heading>
            </div>
        </Wrapper>
    )
}

export default CamperCard;