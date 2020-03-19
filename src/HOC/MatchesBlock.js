import React from 'react'

export const matches_Block = ({match}) => {

    return (

            <div className="match_block">
                <div className="match_block">
                    {match.final
                         ? match.date
                        : `Match not player  yet${match.data}`}
                </div>
                <div className="match_wrapper">
                    <div className="match_top">
                        <div className="icon"></div>
                    </div>
                    <div className="right" style={{backgroundImage: `url(/images/team_icons/${match.localThmb}.png)`}}></div>
                </div>
            </div>
        
    );
}
