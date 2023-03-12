import './styles.css';
import Header from '../../components/Header'
import Sheet from '../../components/Sheet'

const Main = () => {
    return (
        <div className='main-page full-screen page-background-color flex-column'>
           <Header></Header>
           <Sheet></Sheet>
        </div>
    )
}

export default Main;