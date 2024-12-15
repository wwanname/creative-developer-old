import style from "./page.module.css"

export default function PerspectiveText({label}) {
    return (
        <div className={style.PerspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
  }