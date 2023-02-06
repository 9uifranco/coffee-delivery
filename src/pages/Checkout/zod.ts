import * as zod from 'zod'

export const addressValidationSchema = zod.object({
    cep: zod.string().length(8, "Informe um CEP válido"),
    rua: zod.string().min(1, "Informe o nome da sua rua"),
    numero: zod.string().min(1, "Informe o número do local de entrega"),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, "Informe seu bairro"),
    cidade: zod.string().min(1, "Informe sua cidade"),
    uf: zod.string().length(2, "Estado inválido"),
    paymentMethod: zod.string().min(1, "Informe um método de pagamento")
})

export type AddressData = zod.infer<typeof addressValidationSchema>