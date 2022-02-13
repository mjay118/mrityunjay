import React from 'react';
const Education = () => {
    return ( 
    <>
    <div className="mt-3 ml-3 colortext">
        <h1>Education</h1>
        <hr></hr>
        <div className="mt-5">
        <i className="fa fa-graduation-cap fac"><span className="ml-3">KIIT UNIVERSITY</span></i>
        <div className="mt-4">
        <table class="table table-bordered">
    <thead>
      <tr>
        <th>Degree</th>
        <th>Board/University</th>
        <th>Stream</th>
        <th>CGPA/Percentage</th>
        <th>Year of Passing</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>B.Tech</td>
        <td>Deemed To Be University</td>
        <td>Mechanical Engineering</td>
        <td>7.82</td>
        <td>2019</td>
      </tr>
      
    </tbody>
  </table>
        </div>
        </div>
        <div className="mt-5">
        <i className="fa fa-university fac"><span className="ml-3">INDIAN PUBLIC SCHOOL</span></i>
        <div className="mt-4">
        <table class="table table-bordered">
    <thead>
      <tr>
        <th>Degree</th>
        <th>Board/University</th>
        <th>Stream</th>
        <th>CGPA/Percentage</th>
        <th>Year of Passing</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>XII</td>
        <td>CBSE</td>
        <td>Science</td>
        <td>78.6 %</td>
        <td>2015</td>

      </tr>
      <tr>
      <td>X</td>
        <td>CBSE</td>
        <td>-</td>
        <td>10</td>
        <td>2013</td>

      </tr>
      
    </tbody>
  </table>
        </div>
        </div>
    </div>
    </>
     );
}
 
export default Education;