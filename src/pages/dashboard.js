import {useEffect} from'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar.js';
import Footer from '../components/footer.js';

export default function Dashboard(){
    useEffect(()=>{
        document.title = 'Dashboard - Instagram'
    },[]);  

    return (
    <div className="bg-gray-background">
        <Header />
        <div className="grid">
            <Timeline />
            <Sidebar />
        </div>
        <Footer /> 
    </div>);
}