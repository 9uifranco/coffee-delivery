import illustration from '../../../assets/illustration-success.png'
import { IconContainerPurple, IconContainerYellow, IconContainerYellowDark, NewOrderButton, OrderInfo, OrderInfoRow, SuccessContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function Success() {
    const { addressData, paymentSelected, resetCheckout } = useContext(CartContext)

    const navigate = useNavigate();

    function handleClickMakeNewOrder() {
        navigate("/");
        resetCheckout()
    }

    return (
        <SuccessContainer>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
                <div className='wrapper-for-custom-border'>
                    <OrderInfo>
                        <OrderInfoRow>
                            <IconContainerPurple>
                                <MapPin size={16}/>
                            </IconContainerPurple>
                            <div>
                                <span>Entrega em <strong>{addressData.rua}, {addressData.numero}</strong></span>
                                <span>{addressData.bairro} - {addressData.cidade}, {addressData.uf}</span>
                            </div>
                        </OrderInfoRow>
                        <OrderInfoRow>
                            <IconContainerYellow>
                                <Timer size={16}/>
                            </IconContainerYellow>
                            <div>
                                <span>Previsão de entrega</span>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </OrderInfoRow>
                        <OrderInfoRow>
                            <IconContainerYellowDark>
                                <CurrencyDollar size={16}/>
                            </IconContainerYellowDark> 
                            <div>
                                <span>Pagamento na entrega</span>
                                <strong>
                                    {(() => {
                                        switch(paymentSelected) {
                                            case "debito":
                                                return "Cartão de débito"
                                            case "credito":
                                                return "Cartão de crédito"
                                            case "dinheiro":
                                                return "Dinheiro"
                                            default:
                                                return null
                                        }
                                    })()}
                                </strong>
                            </div>
                        </OrderInfoRow>
                    </OrderInfo>
                </div>
            </div>
            <div>
                <img src={illustration}/>
            </div>
            <NewOrderButton onClick={handleClickMakeNewOrder}>
                Fazer novo pedido
            </NewOrderButton>
        </SuccessContainer>
    )
}