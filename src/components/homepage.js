import React from 'react';
import styled from 'styled-components'
import * as constants from './constants'
import { motion } from "framer-motion"


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state={isOpen:false};
    }
    Headline = styled(motion.h1)`
        color: ${constants.primary};
        font-size: 2rem;
        /* margin: 50px; */
    `;
    Section = styled(motion.h2)`
        color: ${constants.secondary};
        /* margin: 50px; */
    `;

    render = () => {
         
        return <motion.nav
                animate={this.state.isOpen ? "open" : "closed"}
                variants={variants}
            >
            <this.Headline animate={{ x: 50 }} initial={{x:0}}>Will Matous</this.Headline>
        </motion.nav>;
    }
}