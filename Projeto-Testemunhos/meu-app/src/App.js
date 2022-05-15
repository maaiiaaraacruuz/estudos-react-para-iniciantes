import logo from './logo.svg';
import './App.css';
import Testemunhos from './componentes/testemunhos.jsx';

function App() {
  return (
    <div className="App">
      <div className='container-principal'> 
        <h1>Veja o depoimento dos nossos alunos</h1>        
      <Testemunhos
        nome='Shawn Wang' 
        pais='Singapura'
        imagem='1'
        cargo='Engenheiro de Software'
        empresa='Amazon'
        testemunho={<>It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer.<strong> freeCodeCamp changed my life.</strong></>} />
     <Testemunhos
        nome='Sarah'
        pais='Nigeria'
        imagem='2'
        cargo='Engenheira de Software'
        empresa='ChatDesk'
        testemunho= {<><strong>freeCodeCamp was the gateway to my career as a software developer. </strong>The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company</>} />
      <Testemunhos
        nome='Emma'
        pais='Suecia'
        imagem='3'
        cargo='Engenheira de Software'
        empresa='Spotify'
        testemunho= {<>I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify</>} />
      </div>      
    </div>
  );
}

export default App;
