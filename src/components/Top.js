/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function goTop() {
    setTimeout(() => {
        window.scrollTo(0,0)
    }, 100)
}

class Top extends React.Component {
    render() {
        return (
            <div className="top" onClick={() => goTop()}>
                Top
            </div>
        )
    }
}

export default Top;