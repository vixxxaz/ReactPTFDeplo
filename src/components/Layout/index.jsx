import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
    
   
    return(
    <main className='App'>
        <section className='page'>
            <span className='tags top-tags top-tag-html'>&lt;html&gt;</span>
            <br />
            <span className='tags top-tags top-tag-body'>&lt;body&gt;</span>

                <Outlet />
                        
            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </section>
    </main>
    )

}

export default Layout