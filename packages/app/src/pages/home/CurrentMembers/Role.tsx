import { FC } from 'react';
import styled from 'styled-components';
import MembersByRole from './MembersByRole';
import FounderSvg from '../../../assets/imgs/founder.svg';
import FellowSvg from '../../../assets/imgs/fellow.svg';
import AllySvg from '../../../assets/imgs/ally.svg';
import { Style } from '../../../shared/style/const';
import { Member, MemberRole } from '../../../hooks';

const RoleMap = {
  [MemberRole.FOUNDER]: FounderSvg,
  [MemberRole.FELLOW]: FellowSvg,
  [MemberRole.ALLY]: AllySvg
};

const Role: FC<{ className?: string; type: MemberRole; desc: string; members: Member[] }> = ({
  className,
  type,
  desc,
  members
}) => {
  return (
    <div className={className}>
      <img src={RoleMap[type]} alt='' />
      <h4>{type}</h4>
      <p>{desc}</p>
      <MembersByRole members={members} />
    </div>
  );
};

export default styled(Role)`
  text-align: center;

  > img {
    margin-bottom: 12px;
  }
  > h4 {
    height: 28px;
    font-size: 24px;
    font-weight: 700;
    color: ${Style.label.primary};
    line-height: 28px;
    margin-bottom: 12px;
  }
  > p {
    margin-bottom: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 90px;
    opacity: 0.87;
    color: ${Style.label.primary};
    line-height: 18px;
  }
`;
