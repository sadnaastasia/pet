import { GiPowerLightning } from 'react-icons/gi';
import { FaStopwatch } from 'react-icons/fa6';
import { MdOutlineDifference } from 'react-icons/md';
import { PiBrain } from 'react-icons/pi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { MdChildCare } from 'react-icons/md';
import { BsSpeedometer } from 'react-icons/bs';

const runningLineArray = [
  { id: 1, title: "It's effective", icon: <GiPowerLightning /> },
  { id: 2, title: 'Short-term', icon: <FaStopwatch /> },
  {
    id: 3,
    title: 'It can be provided in different formats',
    icon: <MdOutlineDifference />,
  },
  { id: 4, title: 'Suitable for sceptics', icon: <PiBrain /> },
  { id: 5, title: 'Evidence-based', icon: <RiSecurePaymentLine /> },
  { id: 6, title: 'Covered by insurance in many countries', icon: <GrMoney /> },
  {
    id: 7,
    title: 'It changes life for the better',
    icon: <MdOutlineSelfImprovement />,
  },
  { id: 8, title: 'Adapted for children', icon: <MdChildCare /> },
  { id: 9, title: 'Quick results', icon: <BsSpeedometer /> },
];

export default runningLineArray;
