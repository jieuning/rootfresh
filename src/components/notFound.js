function NotFound({navigate}) {
  return (
    <div style={{padding: "90px 0 300px 0"}}>
      <div style={{fontSize: "22px", fontWeight: "600"}}>
        해당 페이지를 찾지 못했습니다.</div>
      <div style={{
        textDecoration: "underline",
        color: "#2A6834", 
        marginTop: "20px",
        cursor: "pointer"
      }} 
        onClick={() => navigate('/')}>메인페이지로 이동</div>
    </div>
  )
};

export default NotFound;