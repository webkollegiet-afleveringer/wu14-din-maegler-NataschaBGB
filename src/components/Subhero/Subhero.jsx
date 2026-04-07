import './Subhero.sass';


export default function Subhero({ title, height }) {
    
    return (
        
        <section className='subhero' style={{ height }}>
                
            <h2 className='subhero__title'>{title}</h2>
            
        </section>

    )

}