import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
    return(
        <div>
            <Header />
            <Summary />

           <TransactionsContainer>
                <SearchForm/>

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">R$ 13.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>08/08/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Lanche</td>
                            <td>
                              <PriceHighLight variant="outcome">- R$ 23,00 </PriceHighLight> 
                            </td>
                            <td>Alimentação</td>
                            <td>09/05/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                               <PriceHighLight variant="income"> R$ 13.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>08/08/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}