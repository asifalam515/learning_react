
export function Panel({ title, children,isActive,handleActive }) {
  
 
  
  return (
    <section className="panel">
      <h3>{title}</h3>
    {isActive? <p>{children}</p>:<button onClick={()=>handleActive()} className="btn btn-primary">Show</button>}
      
    </section>
  );
}