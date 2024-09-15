import React from 'react';
import LogIn from './LogIn';

function LogInPage() {
  return (
    <>
      <div style={{backgroundColor: 'blue', zIndex: 0, width: '96%', height: '500px', position: 'absolute', top: "2%", left: "2%", borderRadius: '15px'}}></div>
      <div style={{position: 'relative', zIndex: 1}}>
        <LogIn />
      </div>
    </>
  );
}

export default LogInPage;
