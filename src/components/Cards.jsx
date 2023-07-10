import { Card } from './Card';
import { CourseData } from '../data/courseData';

export const Cards = () => {
  return (
    <div className="cards">
      {CourseData.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};
