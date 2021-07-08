import React from 'react';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/esm/FigureImage';

export const About = () => {


    return (
        <div>

            <Figure>
                <Figure.Image
                    width={1500}
                    height={300}
                    alt="171x180"
                    src="https://liftintent.com/wp-content/uploads/2019/03/moblyft-hiring-1.jpg"
                />
            </Figure>


            <Figure>
                <Figure.Image style={{ borderRadius: "50%", marginLeft: "100px" }}
                    width={100}
                    height={100}
                    alt="171x180"
                    src="https://pbs.twimg.com/profile_images/1401545607378923524/Ijx9DzOl_400x400.jpg"
                />
                <Figure.Caption style={{ color: "black", textAlign: "justify", fontSize: "16px", marginLeft: "100px", maxWidth: "400px" }}>
                    Hi, <br />I am <b>Parizat Binta Kabir.</b> I am currently pursuing my fourth year Bachelor of Engineering in Computer Science. I have a research background with experties in Machine Learning. Now I am working as a <b>Full Stack Web Developer</b> at <b>Fyon S.R.L.</b> &ensp;&ensp;

                </Figure.Caption>
            </Figure>


        </div>








    )
}
