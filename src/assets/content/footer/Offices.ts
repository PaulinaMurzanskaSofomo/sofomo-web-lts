import peterS from "../../avatars/peterS.png";
import peterN from "../../avatars/peterN.png";
import robert from "../../avatars/robert.png";

export const offices = [
  {
    country: `Poland`,
    headquarter: true,
    name: `Peter Schumacher`,
    role: `CEO`,
    address1: `Dmowskiego 3/69, 50-203`,
    address2: `Wrocław, Poland`,
    phone: `+48 697 997 134`,
    avatar: `${peterS}`,
  },
  {
    country: `San Francisco`,
    headquarter: false,
    name: `Robert Hogeboom`,
    role: `Director`,
    address1: `535 Mission St 14th Floor`,
    address2: `San Francisco, CA 94105`,
    phone: `415.244.6460`,
    avatar: `${robert}`,
  },
  {
    country: `London`,
    headquarter: false,
    name: `Peter Nixey`,
    role: `London Rep`,
    address1: `145 City Road`,
    address2: `London, United Kingdom`,
    phone: `0208 144 4033`,
    avatar: `${peterN}`,
  },
];
