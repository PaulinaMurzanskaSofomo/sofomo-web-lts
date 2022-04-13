import peterS from "../../avatars/peterS.png";
import peterN from "../../avatars/peterN.png";
import robert from "../../avatars/robert.png";

export const offices = [
  {
    country: `Poland`,
    headquarter: true,
    data: [
      `Peter Schumacher, CEO`,
      `Dmowskiego 3/69, 50-203`,
      `Wrocław, Poland`,
      `Phone: +48 697 997 134`,
    ],
    avatar: `${peterS}`,
  },
  {
    country: `San Francisco`,
    headquarter: false,
    data: [
      `Robert Hogeboom, Director`,
      `535 Mission St 14th Floor`,
      `San Francisco, CA 94105`,
      `Phone: 415.244.6460`,
    ],
    avatar: `${robert}`,
  },
  {
    country: `London`,
    headquarter: false,
    data: [
      `Peter Nixey, London Rep`,
      `145 City Road`,
      `London, United Kingdom`,
      `Phone: 0208 144 4033`,
    ],
    avatar: `${peterN}`,
  },
];
