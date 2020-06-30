import React , {Component} from 'react';
export default (props)=>{
    return (
        <section className="inner-header divider layer-overlay overlay-dark-4" style={{backgroundImage: `url(${props.bgimg})`}}>
            <div className="container pt-120 pb-60">
                <div className="section-content">
                <div className="row"> 
                    <div className="col-md-12 text-center">
                    <h2 className="text-theme-colored2 font-36">{props.title}</h2>
                    {/* <ol className="breadcrumb mt-10 white">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li className="active">About</li>
                    </ol> */}
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}        
