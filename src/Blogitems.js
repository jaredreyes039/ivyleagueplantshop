import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import { blogPostData as data} from './BlogPosts/BlogPostData';

export function Blogitems(){
        //  To see your blog on the main page:
        // 1. Add Blog Data from BlogPostData to new blogObj template
        // 2. Ensure the information is correct
        // ** YOU need to write the miniarticle displayed on the blog page

        let blogObjs = [
            {
                image: data[0].BlogPost1.Image,
                title: data[0].BlogPost1.Header,
                desc: data[0].BlogPost1.Desc,
                minarticle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat nisl non 
                libero sodales vestibulum. Nulla rutrum lacinia elit eget fringilla. 
                Cras vel viverra tortor.`,
                date: data[0].BlogPost1.Date,
                link: '/BlogPost1'
            },
            {
                image: data[0].BlogPost2.Image,
                title: data[0].BlogPost2.Header,
                desc: data[0].BlogPost2.Desc,
                minarticle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat nisl non 
                libero sodales vestibulum. Nulla rutrum lacinia elit eget fringilla. 
                Cras vel viverra tortor.`,
                date: data[0].BlogPost1.Date,
                link: '/BlogPost2'


            },
            {
                image: data[0].BlogPost3.Image,
                title: data[0].BlogPost3.Header,
                desc: data[0].BlogPost3.Desc,
                minarticle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat nisl non 
                libero sodales vestibulum. Nulla rutrum lacinia elit eget fringilla. 
                Cras vel viverra tortor.`,
                date: data[0].BlogPost3.Date,
                link: '/BlogPost3'

            }
        ]

        return(
            <>
            {blogObjs.map((blogPost)=>{
                return(
                    <>
                    <li>
                       <Link style={{textDecoration: 'none', color: 'black'}} to = {blogPost.link}><div className = 'mainPostContainer'>
                            <div className='postGrid'>
                                <img src = {blogPost.image}></img>
                                <div className='postHead'>
                                <div className='titleDate'>
                                <h2>{blogPost.title}</h2>
                                <p>{blogPost.date}</p>
                                </div>
                                <h4>{blogPost.desc}</h4>
                                <article>{blogPost.minarticle}</article>
                                </div>
                            </div>
                        </div></Link> 
                    </li>
                </>
                )
            })}
            </>
        )
    }
