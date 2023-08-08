import React from 'react'
import './Contentofroom.css'
export default function contentingofRoom() {
  return (
    <div className='bodi'>
       <section>
		<div className="containering">
			<div className="cardc">
				<div className="contenting">
					<div className="imgBx">
						<img src="https://iclp.ntu.edu.tw/cn/upload/housing_m/8da10874c1cff299f5b765f4f122a04d.jpg"/>
					</div>
					<div className="contentingBx">
						<h3>Single<br/><span>Bed Room</span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
						<a href="/DetailSingle">See More</a>
					</li>
				</ul>
			</div>
			<div className="cardc">
				<div className="contenting">
					<div className="imgBx">
						<img src="https://www.thegreatanannda.com/wp-content/uploads/2020/12/Deluxe-Double-Room-1-scaled.jpg"/>
					</div>
					<div className="contentingBx">
						<h3>Double<br/><span>Bed Room</span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
						<a href="/DetailDouble">See More</a>
					</li>
				</ul>
			</div>
			<div className="cardc">
				<div className="contenting">
					<div className="imgBx">
						<img src="https://d39vbwyctxz5qa.cloudfront.net/properties_images/properties_images/3x/833_24920_1554877934.JPG"/>
					</div>
					<div className="contentingBx">
						<h3>Family Stay<br/><span>Bed Room</span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
						<a href="/FamilyStay">See More</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
    </div>

      )
}
