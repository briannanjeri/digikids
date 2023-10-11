import { ICourse } from '@digikids/types'

export interface MissionProps {
  color: string
  icon: string
  title: string
  text: string
}

export interface headerProps {
  style_3?: boolean
  no_topBar?: boolean
}

export interface featureBoxProps {
  img: string
  color: string
  title: string
  icon: string
  text: string
}

export interface navTabProps {
  active?: boolean
  id: string
  title: string
}

export interface SingleFaqProps {
  show?: boolean
  id: string
  title: string
  desc: string
}

export interface categoryProp {
  delay: string
  color: string
  icon: string
  title: string
  icon_name?: boolean
}

export interface accordionItems {
  id: string
  show: boolean
  title: string
  desc: string
}

export interface sortingAreaProps {
  num: number | undefined
  items: ICourse[]
  courses?: ICourse[] | null
  setCourses?: React.Dispatch<React.SetStateAction<ICourse[] | null>>
}
