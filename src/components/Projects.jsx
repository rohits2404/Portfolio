import React, { useState } from "react";
import ProjectCart from "./ProjectCard";

const Projects = () => {

    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };
    const projectList = [
        {
        name: "Converso - LMS SAAS Platform",
        sourceCode: "https://github.com/rohits2404/saas-app.git",
        LiveDemo: "https://converso-smoky.vercel.app/",
        img1: "projects-img/saas.png",
        isLiveDemoDisabled: false
        {
        name: "AI_MOCK_INTERVIEW",
        sourceCode: "https://github.com/rohits2404/AI_MOCK_INTERVIEW.git",
        LiveDemo: "https://prepwise-rho.vercel.app/",
        img1: "projects-img/interview.png",
        isLiveDemoDisabled: false
        },
        {
        name: "Collaborative Editor",
        sourceCode: "https://github.com/rohits2404/Collaborative-Editor.git",
        LiveDemo: "https://docs-mu-six.vercel.app/",
        img1: "projects-img/docs.png",
        isLiveDemoDisabled: false
        },
        {
        name: "Snapgram",
        sourceCode: "https://github.com/rohits2404/Snapgram.git",
        LiveDemo: "https://snapgram-pi-inky.vercel.app/",
        img1: "projects-img/snapgram.png",
        isLiveDemoDisabled: false,
        },
        {
        name: "Store_It",
        sourceCode: "https://github.com/rohits2404/Storage_Management_Solution.git",
        LiveDemo: "https://store-it-coral-nu.vercel.app/",
        img1: "projects-img/storeit.png",
        isLiveDemoDisabled: false,
        },
        {
        name: "Yoom",
        sourceCode: "https://github.com/rohits2404/zoom-clone.git",
        LiveDemo: "https://yoom-two-cyan.vercel.app/",
        img1: "projects-img/yoom.png",
        isLiveDemoDisabled: false,
        },
        {
        name: "Game",
        sourceCode: "https://github.com/rohits2404/Award-Winning-Website.git",
        LiveDemo: "https://award-winning-website-gules.vercel.app/",
        img1: "projects-img/game.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Xora",
        sourceCode:"https://github.com/rohits2404/Xora.git",
        LiveDemo:"https://xora-two-psi.vercel.app/",
        img1:"projects-img/xora.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Travel_UI_UX",
        sourceCode:"https://github.com/rohits2404/Travel_UI_UX.git",
        LiveDemo:"https://xora-two-psi.vercel.app/",
        img1:"projects-img/travel.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Sushi",
        sourceCode:"https://github.com/rohits2404/sushi.git",
        LiveDemo:"https://sushi-puce.vercel.app/",
        img1:"projects-img/sushi.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Restaurant",
        sourceCode:"https://github.com/rohits2404/Gericht-Restaurant.git",
        LiveDemo:"https://sushi-puce.vercel.app/",
        img1:"projects-img/food.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Nike_Page",
        sourceCode:"https://github.com/rohits2404/Nike_Landing_Page.git",
        LiveDemo:"https://nike-landing-page-olive-two.vercel.app/",
        img1:"projects-img/nike.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"GPT",
        sourceCode:"https://github.com/rohits2404/GPT-3.git",
        LiveDemo:"https://gpt-3-nine-sepia.vercel.app/",
        img1:"projects-img/gpt.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Meta",
        sourceCode:"https://github.com/rohits2404/Meta.git",
        LiveDemo:"https://metaverse-sandy-one.vercel.app/",
        img1:"projects-img/meta.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"I-Phone",
        sourceCode:"https://github.com/rohits2404/IPhone.git",
        LiveDemo:"https://apple-gules.vercel.app/",
        img1:"projects-img/apple.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"HooBank",
        sourceCode:"https://github.com/rohits2404/HooBank.git",
        LiveDemo:"https://hoo-bank-five-alpha.vercel.app/",
        img1:"projects-img/bank.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Brainwave",
        sourceCode:"https://github.com/rohits2404/Brainwave.git",
        LiveDemo:"https://brainwave-pearl-two.vercel.app/",
        img1:"projects-img/brainwave.png",
        isLiveDemoDisabled: false,
        },
        {
        name:"Anime",
        sourceCode:"https://github.com/rohits2404/Anime.git",
        LiveDemo:"https://anime-flax-rho.vercel.app/",
        img1:"projects-img/anime.png",
        isLiveDemoDisabled: false,
        },
    ];

    return (
        <>
            <div className="col-10 ms-auto p-4">
                <div className="p-4 slide-in-top">
                    <div className="row">
                        <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">My Projects</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        {projectList.map((item, index) => (
                            <ProjectCart item={item} key={index} />
                        ))}
                    </div>
                    {!loaded && <div className="loader">Loading...</div>}
                </div>
            </div>
        </>
    );
};

export default Projects;
