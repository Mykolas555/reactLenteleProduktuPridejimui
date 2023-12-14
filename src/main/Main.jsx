import TableForm from '../form/TableForm';
import ProductsTable from '../table/ProductsTable';

const Main = ()=>{

    const [products, setProducts] = useState([]);

    const handleFromData = (data) => {
        setProducts([{ ...data}]);
      }

    return (
    <>
        <h2>Produktu Forma</h2>
        <TableForm/>
        <h2>Produktu lentele</h2>
        <ProductsTable/>
    </>
    )
}

export default Main