import React from 'react';
import images from './assets/images/images';

class App extends React.Component {
    render() { 
        return (
            <>
                <div className="Header">
                    <div className="Header-content">
                        <img src={ images.logo } alt="Pokemon App Logo" className='Header-content-img'/>
                        <p className="Header-content-p">App</p>
                    </div>
                </div>
                <div className="Navbar">
                        <div className="Navbar-content">
                            <ul className="Navbar-content-ul">
                                <li className="Navbar-content-ul-li">
                                    <a href="#!" className='Navbar-content-ul-li-a'>
                                        About
                                    </a>
                                </li>
                                <li className="Navbar-content-ul-li">
                                    <a href="#!" className='Navbar-content-ul-li-a'>
                                        Find
                                    </a>
                                </li>
                                <li className="Navbar-content-ul-li">
                                    <a href="#!" className='Navbar-content-ul-li-a'>
                                        Author
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="Home">
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10 Home-content">
                                <h1 className="Home-content-h1">
                                    <span className="Home-content-h1-span">Hi</span>, let me <br/>
                                    introduce <span className="Home-content-h1-span">You</span> <br/>
                                    my friends!
                                </h1>
                                <p className="Home-content-p">
                                    <a href="#!" className="Home-content-p-a">Gotta Catch 'Em All</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="About">
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10 About-content">
                                <p className="About-content-p">There are already quite a few 'catch all' places on the internet,  so you're probably thinking 'why did you make this site?' Honestly, I just wanted to enjoy and improve my programming skills by creating a project from scratch, finding problems and solving them, by doing it I can learn a lot more new things. So I created a new project in Figma, designed the entire page and just coded it ... At the bottom of this section, I published a list of technologies used to create the Pokemon application. Hope you enjoy it and find your Dragonite.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Quote">
                    <div className="container">
                        <div className="Quote-content">
                            <p className="Quote-content-p">
                                “We do have a lot in common.<br/> The same earth, the same air, the same sky. Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows?” 
                                <br/>
                                <br/>
                            — Meowth</p>
                        </div>
                    </div>
                </div>
                <div className="Brands">
                    <div className="Brands-content"></div>
                </div>
                <div className="Find">
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10 Find-content">
                                <form onSubmit={() => console.log('onSubmit')}>
                                    <div className="Find-content-form">
                                        <div className="ButtonIn">
                                            <input 
                                                type="text" 
                                                className="Find-content-form-input"
                                                placeholder="Search by name" 
                                            />
                                            <button type='submit' className="Find-content-form-button">
                                                <i className="fas fa-search Find-content-form-button-i"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="Find-content-result">
                                    <ul className="Find-content-result-ul">
                                        <li className="Find-content-result-ul-li">Name: Oddish</li>
                                        <li className="Find-content-result-ul-li">Base expreience: 64</li>
                                        <li className="Find-content-result-ul-li">Forms: oddish</li>
                                        <li className="Find-content-result-ul-li">Abilities: chlorophyll, run-away</li>
                                        <li className="Find-content-result-ul-li">Height: 5</li>
                                        <li className="Find-content-result-ul-li">Weight: 54</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Author">
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10 Author-content">
                                <p className="Author-content-p"><span className="Author-span">Hey</span>, I am bla... bla...<br/> Just check my socials <br/>if <span className="Author-span">You</span> want</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Links">
                    <div className="container">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8 Links-content">
                                <ul className="Links-content-ul">
                                    <li className="Links-content-ul-li">
                                        <a href="#!" className='Links-content-ul-li-a'>
                                            Facebook
                                            <i className="fab fa-facebook Links-content-ul-li-a-i"></i>
                                        </a>
                                    </li>
                                    <li className="Links-content-ul-li">
                                        <a href="#!" className='Links-content-ul-li-a'>
                                            Instagram
                                            <i className="fab fa-instagram Links-content-ul-li-a-i"></i>
                                        </a>
                                    </li>
                                    <li className="Links-content-ul-li">
                                        <a href="#!" className='Links-content-ul-li-a'>
                                            Github
                                            <i className="fab fa-github Links-content-ul-li-a-i"></i>
                                        </a>
                                    </li>
                                    <li className="Links-content-ul-li">
                                        <a href="#!" className='Links-content-ul-li-a'>
                                            YouTube
                                            <i className="fab fa-youtube Links-content-ul-li-a-i"></i>
                                        </a>
                                    </li>
                                    <li className="Links-content-ul-li">
                                        <a href="#!" className='Links-content-ul-li-a'>
                                            LinkedIn
                                            <i className="fab fa-linkedin Links-content-ul-li-a-i"></i>
                                        </a>
                                    </li>
                                    <li className="Links-content-ul-li">
                                        <a href="#!" className='Links-content-ul-li-a'>
                                            Gmail
                                            <i className="fab fa-google Links-content-ul-li-a-i"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer">
                    <div className="Footer-content">
                        <p className="Footer-content-p">Copyright &copy; 2021 PokemonApp.<br/>Designed & Created By a <a href="#!" className='Footer-content-p-a'>Choszcz</a></p>
                    </div>
                </div>
            </>
        );
    }
}
 
export default App;