import { ADMIN_TAB_LABEL } from "@/constants/tab"
import { JSX } from "react"

export type TabType = {
    index: ADMIN_TAB_LABEL
    label: string
    Icon?: JSX.Element
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    Content?: React.ReactNode
  }