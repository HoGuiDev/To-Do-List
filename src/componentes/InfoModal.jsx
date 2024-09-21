import { Back, Conteiner, Fechar } from './InfoModalStyled'

export default function InfoModal({isOpen, children, InfoFechar}) {
    if(isOpen) {
        return (
            <Back>
                <Conteiner>
                    <Fechar onClick={InfoFechar}>X</Fechar>
                    {children}
                </Conteiner>
            </Back>
        )
    }
}