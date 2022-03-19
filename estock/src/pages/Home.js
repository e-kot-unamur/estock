import Navigation from "../components/Navigation";
import Games from '../components/Games';

const Home = () =>{
    return (
        <div className="Home">
        <Navigation/>
        Le kotéjeux est un kot à projet tenant une ludothèque proposant de louer des jeux de sociétés gratuitement pour les étudiants.<br/><br/>
        <Games/>
        </div>
    );
};
export default Home;
