import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, description}) {

    // const [isExpanded, setIsExpanded] = useState(false);
    //
    // const toggleDescription = () => {
    //     setIsExpanded(prevState => !prevState); // Toggle expanded state
    // };

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    {/*<button  onClick={toggleDescription}  style={{*/}
                    {/*    backgroundColor: theme.secondary,*/}
                    {/*    color: theme.primary,*/}
                    {/*    border: 'none',*/}
                    {/*    padding: '0.5rem 1rem',*/}
                    {/*    cursor: 'pointer',*/}
                    {/*    borderRadius: '5px',*/}
                    {/*    marginTop: '1rem',*/}
                    {/*}} >hi</button>*/}
                    {/*{isExpanded ? 'Hide Details' : 'Show Details'}*/}
                    {/*/!*</button>*!/*/}
                    {/*{isExpanded && (*/}
                    {/*    <p className="detailed-description" style={{ color: theme.tertiary60, marginTop: '1rem' }}>*/}
                    {/*        {description}*/}
                    {/*    </p>*/}
                    {/*)}*/}
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
