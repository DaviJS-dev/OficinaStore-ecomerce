import Directory from '../../components/directory/directory.component';
import Consert from '../../assets/image/conserto.jpg'
import Cabo from '../../assets/image/cabos.jpg'
import Carregador from '../../assets/image/carregador.jpg'
import Capa from '../../assets/image/capa.jpg'
import Celular from '../../assets/image/celular.jpg'



const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Manutenção',
      imageUrl: Consert,
    },
    {
      id: 2,
      title: 'Cabos',
      imageUrl: Cabo,
    },
    {
      id: 3,
      title: 'Carregadores',
      imageUrl: Carregador,
    },
    {
      id: 4,
      title: 'Capinhas',
      imageUrl: Capa,
    },
    {
      id: 5,
      title: 'Celulares',
      imageUrl: Celular,
    },
  ]

  return(
    <div>
      
   <Directory categories={categories} />

    </div>
)};

export default Home;