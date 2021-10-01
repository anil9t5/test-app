import { withRouter } from "next/router"

const ActiveLink = ({ router, href, children }) => {
  const handleClick = (e) => {
    router.push(href)
  }
  const isCurrentPath = router.pathname === href || router.asPath === href
  return (
    <div>
      <a
        className={isCurrentPath ? "nav-link active" : "nav-link"}
        href={href}
        onClick={handleClick}>
        {children}
      </a>
      <style jsx>{`
        .active {
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-bottom: 0px !important;
          border-radius: 10px !important;
          color: #656af6;
          background-color: #ffffff;
          border: 1px solid #e2e7fa;
        }
        .nav-link {
          color: #656af6 !important;
          font-size: 20px;
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-bottom: 0px !important;
          border-radius: 10px !important;
          border: 1px solid #d0d1ff;
        }
        .nav-link:hover {
          color: #ffffff !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-bottom: 0px !important;
          border-radius: 10px !important;
          background-color: #656af6 !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )
}

export default withRouter(ActiveLink)
