import Image from "next/image";

export default function Section2(){
    return(
        <div className="ParentSection2" id="About">
<div className="ChildSection2">
<div className="imageim">
<Image src={"/1.png"} alt="profile" width={500} height={100}/>
</div>
<div className="fullstack">
<h1>Web Developer</h1>
</div>
<div className="paragraphsection2">
<p>I'm  a passionate Web Developer skilled in HTML, CSS, JavaScript, and TypeScript. I'm specialize in building dynamic, responsive web applications using Next.js for the front-end and Tailwind CSS for modern, scalable styling. Having skills through practical training with the Governor IT Initiative program, gained valuable experience in developing real-world solutions that prioritize user experience and performance. strong foundation in both front-end and development enables to tackle the development lifecycle, from designing interactive user interfaces to implementing complex features. continuously seeks to improve my skills, staying up-to-date with industry trends and best practices to deliver high-quality solutions ,let me know if you want any website just mail me.</p>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=iffatul2018@gmail.com" target="_blank"><button>Contact Me</button></a>
</div>
</div>
        </div>
    )
}