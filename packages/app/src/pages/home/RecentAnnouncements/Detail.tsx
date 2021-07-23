import { Col, Row } from 'antd';
import { CSSProperties, FC, useState } from 'react';
import styled from 'styled-components';
import { Announcement } from './index';
import ExpandSvg from '../../../assets/imgs/expand.svg';
import DeexpandSvg from '../../../assets/imgs/fold.svg';
import { Style } from '../../../shared/style/const';

const Status = styled.span<{ expanded: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  opacity: 1;
  background: ${(props) => (props.expanded ? Style.badge.primary : Style.badge.negative)};
  border-radius: 50%;
  margin-right: 17px;
`;
const BorderTypeMap = {
  default: `1px solid ${Style.border.default}`,
  primary: ``,
  none: ''
};
const DetailWrapper = styled.div<{ top: BorderType; bottom: BorderType }>`
  cursor: pointer;
  padding: 21px 0px;
  border-top: ${(props) => BorderTypeMap[props.top]};
  border-bottom: ${(props) => BorderTypeMap[props.bottom]};
  font-size: 15px;
  color: #ffffff;
  line-height: 18px;
  > .info {
    img {
      cursor: pointer;
    }
  }
  > .content {
    overflow-y: scroll;
    margin-top: 20px;
    max-height: 256px;
    background: ${Style.bg.primary};
    font-size: 14px;
    border: 1px solid #6b7076;
    border-radius: 8px;
    padding: 17px 16px;
    opacity: 0.87;
    line-height: 18px;
  }
`;

type BorderType = 'primary' | 'default' | 'none';
const AnnouncementDetail: FC<{
  className?: string;
  annoncement: Announcement;
  defaultExpanded?: boolean;
  style?: CSSProperties;
  top?: BorderType;
  bottom?: BorderType;
}> = ({ className, annoncement, style, defaultExpanded = false, top = 'none', bottom = 'default' }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <DetailWrapper
      className={className}
      style={style}
      top={top}
      bottom={bottom}
      onClick={() => setExpanded((old) => !old)}
    >
      <Row className='info'>
        <Col span={6} style={{ paddingLeft: '16px' }}>
          <Status expanded={expanded} />
          {annoncement.date}
        </Col>
        <Col span={17}>{annoncement.content.split('\n')[0].slice(0, 40)}</Col>
        <Col span={1} style={{ textAlign: 'right', paddingRight: '11px' }}>
          <img src={expanded ? DeexpandSvg : ExpandSvg} alt='' />
        </Col>
      </Row>
      {expanded && <div className='content'>{annoncement.content}</div>}
    </DetailWrapper>
  );
};

export default AnnouncementDetail;
