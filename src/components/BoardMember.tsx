import { BoardMemberI } from '@/interfaces';
import Link from 'next/link';

interface BoardMemberProps {
  boardMember: BoardMemberI;
}

const BoardMember = ({ boardMember }: BoardMemberProps) => {
  return (
    <div className="row justify-content-center our-team_board-members__row">
      <div className="col-6">
        <Link href={`/our-team/${boardMember.id}`}>
          <div className="row">
            <div className="col">
              <img src={boardMember.img} alt={boardMember.fullName} />
            </div>
            <div className="col-6 our-team_board-members__row--text">
              <h3>{boardMember.fullName}</h3>
              <h4>{boardMember.workingPosition}</h4>
              <p>{boardMember.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BoardMember;
