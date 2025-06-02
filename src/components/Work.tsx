import React from "react";
import homePageImg from '../assets/work-samples/MainNenu.png'
import blackjackImg from '../assets/work-samples/Blackjack.png'
import twdImg from '../assets/work-samples/TWDSlots.jpg'

const Work: React.FC<{}> = () => {
    return (
        <div className="space-y-10 m-20">
            <div>
                <div className="header bg-clip-content"> LuckyLand Slots </div>
                <div className="mx-auto">
                    <div className="mini-header"> Main Menu </div>
                    <img className="mx-auto w-full" src={homePageImg} alt="Main-Menu" />
                    <div className="blurb">
                        <p className="m-4"> As part of the wrapper team for Luckyland Slots, I worked on several features of the main menu.
                         I worked with the server team, product team, and art team to develop the favoriting system and sorting
                         systems which allowed users to select favorite slot games from the lobby and while in game. They could
                         then sort and filter by category to only see the games they were looking for. </p>
                         <p className="m-4"> In my final year at the company, we changed our main menu from a unity application
                         to a web application using React and Typescript. This involved finding solutions to match the look and
                         functionality using react hooks and css animations </p>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="mini-header"> Blackjack </div>
                    <img className="mx-auto w-full" src={blackjackImg} alt="Blackjack" />
                    <div className="blurb">
                        <p className="m-4"> Blackjack was the first table game created at Luckyland slots. This work allowed me to step
                         into a design role as many details of the sound design, pacing, and animation were being built on the fly. The
                         game went on to be a main draw for players even years after release. </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="header bg-clip-content"> The Walking Dead Slots </div>
                <div className="mx-auto">
                    <div className="mini-header"> Slot Development and Seasonal Updates </div>
                    <img className="mx-auto w-full" src={twdImg} alt="TWDSlots" />
                    <div className="blurb">
                        <p className="m-4"> After 6 months working at Foxcub games, I was the sole developer working on The Walking
                         Dead Slots. I was doing all of the bug fixes and event updates, handling the releases, and I also developed
                         the most complex slot machine that the team had designed up to that date. The specific work involved for this
                         was to iterate on old bonus game code for 5 separate games and adapt it so that all the games would trade off
                         and work as part of one machine. </p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Work