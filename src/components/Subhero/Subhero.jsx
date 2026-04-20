import './Subhero.sass';


export default function Subhero({ height, title, titleSize, subtitle }) {
    
    return (
        
        <section className='subhero' style={{ height }}>
                
            <h1 className='subhero__title' style={{ fontSize: titleSize }}>
                {title}
            </h1>
            {subtitle && <p className='subhero__subtitle'>Home | <span>{subtitle}</span></p>}
            
        </section>

    )

}