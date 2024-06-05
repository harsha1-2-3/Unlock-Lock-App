import {useState} from 'react'
import {Bg, BgCard, MainImg, Para, Btn} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(false)

  const onClickLockBtn = () => {
    setIsLocked(prevState => !prevState)
  }

  const lockParaStatus = isLocked ? 'Unlocked' : 'Locked'
  const lockBtnStatus = isLocked ? 'Lock' : 'Unlock'
  const lockImgUrlStatus = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const lockImgAltStatus = isLocked ? 'unlock' : 'lock'

  return (
    <Bg>
      <BgCard>
        <MainImg src={lockImgUrlStatus} alt={lockImgAltStatus} />
        <Para>Your Device is {lockParaStatus}</Para>
      </BgCard>
      <Btn onClick={onClickLockBtn} type="button">
        {lockBtnStatus}
      </Btn>
    </Bg>
  )
}
export default Unlock
