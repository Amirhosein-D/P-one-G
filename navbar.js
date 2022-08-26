// select the main element for append navbar ):
const NAVBAR = document.querySelector('header');


// icons valu ):

// left icons ):
const iconBars = `

<div class="iconBoxSvg" id="iconBars">
<svg width="35px" height="35px" viewBox="-6.5 0 90.9 90.9" xmlns="http://www.w3.org/2000/svg">
<g id="Group_9" data-name="Group 9" transform="translate(-1233.4 -876.9)">
<line id="Line_35" data-name="Line 35" y2="24.9" transform="translate(1244.9 902.5)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
<line id="Line_36" data-name="Line 36" y2="10.6" transform="translate(1273 879.4)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
<circle id="Ellipse_6" data-name="Ellipse 6" cx="9.2" cy="9.2" r="9.2" transform="translate(1235.4 929)" fill="none" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="4"/>
<circle id="Ellipse_7" data-name="Ellipse 7" cx="9.2" cy="9.2" r="9.2" transform="translate(1263.8 891.7)" fill="none" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="4"/>
<line id="Line_37" data-name="Line 37" y2="35.1" transform="translate(1273 912.3)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
<line id="Line_38" data-name="Line 38" y2="16.8" transform="translate(1244.9 948.5)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
<line id="Line_39" data-name="Line 39" y2="24.9" transform="translate(1300.4 902.5)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
<circle id="Ellipse_8" data-name="Ellipse 8" cx="9.2" cy="9.2" r="9.2" transform="translate(1290.9 929)" fill="none" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="4"/>
<line id="Line_40" data-name="Line 40" y2="16.8" transform="translate(1300.4 948.5)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
</g>
</svg>              
</div>
` ;
const iconLeft1 = `
<buttom id="homeBtn">
<div class="iconBoxSvg moveleft">
                    <svg width="35px" height="35px" viewBox="0 -4.99 92.071 92.071" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_21" data-name="Group 21" transform="translate(-285.564 -881.7)">
                          <path id="Path_63" data-name="Path 63" d="M361.5,925.2v25.9c0,5.7-3.4,10.2-7.5,10.2H306.9c-4.1,0-7.5-4.6-7.5-10.2V925.2" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
                          <path id="Path_64" data-name="Path 64" d="M289.1,921.7l33.1-33.1s3.2-4.4,8.4-4.4,9.1,4.3,9.1,4.3l34.4,34.4" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
                          <path id="Path_65" data-name="Path 65" d="M335.6,950.1H325.3a3.159,3.159,0,0,1-3.2-3.2v-14a3.159,3.159,0,0,1,3.2-3.2h10.3a3.159,3.159,0,0,1,3.2,3.2v14A3.159,3.159,0,0,1,335.6,950.1Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
                        </g>
                      </svg>
                </div>
                </buttom>  
` ;
const iconLeft2 = `
<a href="#aboute"> 
<div class="iconBoxSvg moveleft">
                    <svg width="35px" height="35px" viewBox="0 -1.1 91.6 91.6" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_12" data-name="Group 12" transform="translate(-1021.4 -458.6)">
                          <path id="Path_25" data-name="Path 25" d="M1104.6,501.3h-21.8a15.6,15.6,0,1,1-31.2,0h-21.8a6.554,6.554,0,0,0-6.4,6.6v31.5a6.554,6.554,0,0,0,6.4,6.6h74.8a6.554,6.554,0,0,0,6.4-6.6V507.9A6.554,6.554,0,0,0,1104.6,501.3Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_26" data-name="Path 26" d="M1100.1,500.9V478.8c0-11.1,1.8-17.8-7.7-18.2H1043c-9.9,0-8.8,6.6-8.8,16.6v24.2" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_27" data-name="Path 27" d="M1049.2,477h-.4a1.11,1.11,0,0,1-1.1-1.1v-.4a1.11,1.11,0,0,1,1.1-1.1h.4a1.11,1.11,0,0,1,1.1,1.1v.4A1.11,1.11,0,0,1,1049.2,477Z" fill="#2b4ea2" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="2"/>
                          <path id="Path_28" data-name="Path 28" d="M1055,486.7h-.4a1.11,1.11,0,0,1-1.1-1.1v-.4a1.11,1.11,0,0,1,1.1-1.1h.4a1.11,1.11,0,0,1,1.1,1.1v.4A1,1,0,0,1,1055,486.7Z" fill="#2b4ea2" stroke="#2b4ea2" stroke-miterlimit="10" stroke-width="2"/>
                          <line id="Line_6" data-name="Line 6" x2="9.7" y2="26.5" transform="translate(1100.3 477.4)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_7" data-name="Line 7" y1="25.8" x2="9.6" transform="translate(1024.3 478.4)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_8" data-name="Line 8" x2="17.5" transform="translate(1057.2 475.7)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_9" data-name="Line 9" x2="17.5" transform="translate(1062.6 485.4)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                      </svg>
                </div>
                </a>
`;
const iconLeft3 = `
<a href="#discount">
<div class="iconBoxSvg moveleft">
<?xml version="1.0" ?><svg  class="svgicons" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="bag-discount"><path d="M15.3535,11.8535l-6,6a.5.5,0,0,1-.707-.707l6-6a.5.5,0,0,1,.707.707Z"/><path d="M9.5,10A1.5,1.5,0,1,0,11,11.5,1.5017,1.5017,0,0,0,9.5,10Zm0,2a.5.5,0,1,1,.5-.5A.5006.5006,0,0,1,9.5,12Z"/><path d="M14.5,16A1.5,1.5,0,1,0,16,17.5,1.5017,1.5017,0,0,0,14.5,16Zm0,2a.5.5,0,1,1,.5-.5A.5006.5006,0,0,1,14.5,18Z"/><path d="M17.5,7H17a5.0071,5.0071,0,0,0-5-5A5.0059,5.0059,0,0,0,7,7H6.5A2.5026,2.5026,0,0,0,4,9.5v10A2.5026,2.5026,0,0,0,6.5,22h11A2.5026,2.5026,0,0,0,20,19.5V9.5A2.5026,2.5026,0,0,0,17.5,7ZM12,3a4.0078,4.0078,0,0,1,4,4H8A4.0042,4.0042,0,0,1,12,3Zm7,16.5A1.5017,1.5017,0,0,1,17.5,21H6.5A1.5017,1.5017,0,0,1,5,19.5V9.5A1.5017,1.5017,0,0,1,6.5,8h11A1.5017,1.5017,0,0,1,19,9.5Z"/></g></svg>
</div>
</a>
`;
const iconLeft4 = `
<a href="#comments"> 
<div class="iconBoxSvg moveleft">
                    <svg width="35px" height="35px" viewBox="0 -10.79 107 107" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_5" data-name="Group 5" transform="translate(-1020.5 -250.9)">
                          <path id="Path_17" data-name="Path 17" d="M1113,252.9h-78a12.5,12.5,0,0,0-12.5,12.5v65.7s0,3.4,2.7,3.2c1.7,0,15.2-8.5,19.3-11.2H1113a12.5,12.5,0,0,0,12.5-12.5V265.4A12.5,12.5,0,0,0,1113,252.9Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_3" data-name="Line 3" x2="21" transform="translate(1047.1 280.3)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_4" data-name="Line 4" x2="45.5" transform="translate(1047.1 298.4)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                      </svg>
                </div>
                </a>
`;
const iconLeft5 = `
<a href="#shop">
<div class="iconBoxSvg moveleft">
                    <svg class="svgicons" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                         viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                        <g id="Marketplace">
                        	<path d="M63.8651199,16.83885L55.2782173,2.01175c-0.669899-1.1552999-1.8330002-1.8457-3.1113968-1.8457H11.7743196
                        		c-1.2841997,0-2.4970999,0.7236-3.1659994,1.8896L0.1327249,16.8427505
                        		c-0.1778047,0.3095989-0.1768047,0.6894989,0.0018953,0.9981003c0.1787,0.3085995,0.5088,0.4989986,0.8652999,0.4989986H5.39152
                        		v31.4707012c0,0.9520988,0.4052048,1.8798981,1.1122999,2.5477982c0.7011003,0.6612015,1.6289048,1.0254021,2.6131997,1.0254021
                        		h10.7520008h24.2617054H54.842617c0.9932022,0,1.9317017-0.3680992,2.642601-1.0381012
                        		c0.7139015-0.6748009,1.1231003-1.6123009,1.1231003-2.5732002v-31.4326h4.3916016
                        		c0.357399,0,0.687397-0.1903992,0.8661995-0.5009995C64.0448151,17.5292492,64.0448151,17.1484509,63.8651199,16.83885z
                        		 M16.767725,16.3398495L20.6921196,2.16605h10.3078003v14.1737995H16.767725z M32.9999199,2.16605h10.3064995l3.925499,14.1737995
                        		H32.9999199V2.16605z M10.3426199,3.05075c0.3184004-0.5537,0.8535004-0.8847001,1.4316998-0.8847001h6.8424044
                        		L14.69242,16.3398495H6.39152H2.7254202L10.3426199,3.05075z M20.8690205,51.3837509V31.8183498h22.2617054v19.5654011H20.8690205z
                        		 M56.6083183,49.7724495c0,0.419899-0.1767998,0.8174019-0.4952011,1.1190987
                        		c-0.3319969,0.3125-0.7958984,0.4922028-1.2705002,0.4922028h-9.7118912V30.8183498c0-0.5527-0.4473076-1-1-1H19.8690205
                        		c-0.5527,0-1,0.4473-1,1v20.5654011H9.1170197c-0.4647999,0-0.9179001-0.1748009-1.2411995-0.4794998
                        		c-0.3125-0.2959023-0.4843001-0.6836014-0.4843001-1.0937004V18.3398495h49.2167969V49.7724495z M57.6083183,16.3398495h-8.3007011
                        		L45.3811188,2.16605h6.7857018c0.5566978,0,1.0723,0.3173001,1.3809052,0.8486001l7.7177925,13.3251991H57.6083183z"/>
                        	<path d="M43.9999199,57.8456497h-24c-0.5489006,0-0.994194,0.4454002-0.994194,0.9942017
                        		c0,0.5487976,0.4452934,0.9940987,0.994194,0.9940987h24c0.5488052,0,0.9940987-0.4453011,0.9940987-0.9940987
                        		C44.9940186,58.29105,44.5487251,57.8456497,43.9999199,57.8456497z"/>
                        	<path d="M43.9999199,61.8456497h-24c-0.5489006,0-0.994194,0.4454002-0.994194,0.9942017
                        		c0,0.5487976,0.4452934,0.9940987,0.994194,0.9940987h24c0.5488052,0,0.9940987-0.4453011,0.9940987-0.9940987
                        		C44.9940186,62.29105,44.5487251,61.8456497,43.9999199,61.8456497z"/>
                        </g>
                    </svg>
                </div>
                </a>
`;
const iconLeft6 = `
<a href="#us"> 
<div class="iconBoxSvg moveleft">
                    <svg width="35px" height="35px" viewBox="-15.55 0 90.1 90.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_24" data-name="Group 24" transform="translate(-480.1 -460.4)">
                          <path id="Path_18" data-name="Path 18" d="M482.1,489.9c0,15.2,17.4,48.3,27.5,48.3,9.9,0,27.5-33.2,27.5-48.3a27.5,27.5,0,0,0-55,0Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_19" data-name="Path 19" d="M521.7,487.2a12.115,12.115,0,0,1-13.6,13.6,12.3,12.3,0,0,1-10.5-10.5,12.115,12.115,0,0,1,13.6-13.6A12.41,12.41,0,0,1,521.7,487.2Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_20" data-name="Path 20" d="M537.1,537.3c0,6.2-12.3,11.2-27.5,11.2s-27.5-5-27.5-11.2c0-3.9,5-7.4,12.5-9.4" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                      </svg>
                </div>
                </a>
`;

// name part and icons ):
const iconName1 = `
<div class="iconBoxSvg">
                <svg class="svgicons" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    	 viewBox="0 0 512.355 512.355" style="enable-background:new 0 0 512.355 512.355;" xml:space="preserve">
                    <g transform="translate(1 1)">
                    	<g>
                    		<g>
                    			<path d="M181.237,267.985c5.207,0,8.678-3.471,8.678-8.678c0-39.919,18.224-69.424,43.39-69.424h43.39
                    				c3.471,0,6.942-2.603,7.81-6.075c1.736-3.471,0-6.942-2.603-9.546c-6.942-5.207-13.885-23.431-13.885-36.447
                    				c0-23.431,24.298-26.034,34.712-26.034c5.207,0,8.678-3.471,8.678-8.678c0-5.207-3.471-8.678-8.678-8.678
                    				c-31.241,0-52.068,16.488-52.068,43.39c0,11.281,3.471,24.298,8.678,34.712h-26.034c-35.58,0-60.746,36.447-60.746,86.78
                    				C172.559,264.514,176.031,267.985,181.237,267.985z"/>
                    			<path d="M325.292,84.88c11.281,5.207,20.827,20.827,20.827,35.58c0,19.092-15.62,34.712-34.712,34.712
                    				c-4.339,0-8.678,2.603-8.678,6.942s1.736,7.81,6.075,9.546c6.075,2.603,11.281,10.414,11.281,18.224
                    				c0,9.546-7.81,17.356-17.356,17.356h-52.068c-21.695,0-43.39,16.488-43.39,52.068c0,5.207,3.471,8.678,8.678,8.678
                    				s8.678-3.471,8.678-8.678c0-21.695,9.546-34.712,26.034-34.712h52.068c19.092,0,34.712-15.62,34.712-34.712
                    				c0-6.942-2.603-14.753-6.942-20.827c19.092-7.81,32.976-26.902,32.976-48.597c0-21.695-13.017-43.39-31.241-51.2
                    				c-4.339-1.736-9.546,0-11.281,4.339S320.953,83.144,325.292,84.88z"/>
                    			<path d="M510.773,231.127c-0.128-0.817-0.326-1.563-0.641-2.193l-12.378-23.43l-11.052-21.695
                    				c-0.346-0.692-0.836-1.381-1.458-2.018c-2.13-3.47-6.762-4.678-10.691-2.321l-239.56,123.227h-71.111
                    				c-5.207,0-8.678,3.471-8.678,8.678v26.902c0,10.414-17.356,10.414-17.356,0v-27.77c0-5.207-3.471-8.678-8.678-8.678H94.458
                    				v-25.166c0-13.885-11.281-26.034-26.034-26.034H33.712c-5.207,0-8.678,3.471-8.678,8.678v42.522h-0.868
                    				C9.414,304.432-1,315.714-1,329.598v86.78c0,7.81,3.471,14.753,8.678,19.092c4.339,4.339,9.546,6.075,14.753,6.075
                    				c1.736,0,2.603,0,3.471,0h345.383c6.942,0.868,13.017-0.868,18.224-5.207s8.678-11.281,8.678-19.092v-86.78
                    				c0-11.075-7.181-21.04-17.133-25.503l125.608-63.88C510.566,239.521,512.351,235.149,510.773,231.127z M474.553,198.561
                    				l15.62,31.241l-77.234,39.919l-15.608-31.217L474.553,198.561z M381.871,246.5l15.845,31.103l-48.993,25.094h-75.498
                    				L381.871,246.5z M42.39,267.985h26.034c4.339,0,8.678,3.471,8.678,8.678v25.166H42.39V267.985z M25.902,320.053h7.81H85.78
                    				h34.712v18.224c0,13.885,11.281,24.298,26.034,24.298c14.753,0,26.034-10.414,26.034-24.298v-19.092h65.085h112.814h20.827
                    				c5.207,1.736,9.546,5.207,9.546,10.414v59.878H16.356v-59.01C16.356,325.259,20.695,320.92,25.902,320.053z M378.227,422.453
                    				c-1.736,0.868-2.603,1.736-5.207,1.736h-0.868H25.034h-0.868c-2.603,0-4.339-0.868-5.207-0.868
                    				c-1.736-1.736-2.603-3.471-2.603-6.075v-10.414h364.475v9.546C380.831,418.981,379.963,420.717,378.227,422.453z"/>
                    		</g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </div>
`;
const NameName = `
<div class="textContentN">
                <h1>C . A . W</h1>
            </div>
`;
const iconName2 = `
<div class="iconBoxSvg">
                <svg width="35px" hegth="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
                            <g>
                                <path style="fill:none;" d="M266.603,334.884h-21.205c-27.872,0-50.466-22.594-50.466-50.466l0,0h122.137l0,0
                                    C317.068,312.29,294.475,334.884,266.603,334.884z"/>
                                <path style="fill:none;" d="M87.029,149.554c-0.06,1.024-0.093,2.021-0.093,2.988c0,72.898,46.218,116.289,110.869,131.878
                                    h116.394c64.646-15.588,110.863-58.975,110.863-131.874c0-0.968-0.032-1.965-0.093-2.992L87.029,149.554L87.029,149.554z"/>
                            </g>
                            <g>
                                <path style="fill:rgb(24, 79, 181);" d="M320.138,482.626h-49.45v-14.537c0-8.111-6.577-14.688-14.688-14.688
                                    c-8.112,0-14.688,6.577-14.688,14.688v14.537h-49.45c-8.112,0-14.688,6.577-14.688,14.688s6.576,14.688,14.688,14.688h128.274
                                    c8.111,0,14.688-6.577,14.688-14.688S328.248,482.626,320.138,482.626z"/>
                                <path style="fill:rgb(24, 79, 181);" d="M439.722,150.71c-0.006-0.22-0.019-0.447-0.028-0.67c-0.016-0.404-0.031-0.808-0.054-1.221
                                    c-0.003-0.043-0.003-0.085-0.006-0.128c-0.001-0.028-0.007-0.053-0.009-0.079c-1.124-18.563-10.014-45.267-28.409-85.538
                                    c-3.369-7.379-12.085-10.631-19.461-7.257c-7.379,3.369-10.628,12.084-7.257,19.461c4.885,10.696,17.38,38.062,23.026,59.587
                                    H104.441c6.989-26.675,25.645-65.561,40.069-95.612c1.613-3.361,3.196-6.658,4.734-9.878h222.795
                                    c8.111,0,14.688-6.577,14.688-14.688S380.15,0,372.039,0H139.963c-5.684,0-10.859,3.278-13.284,8.419
                                    c-2.708,5.74-5.627,11.821-8.651,18.123c-20.496,42.702-43.586,90.83-45.616,121.747c-0.012,0.135-0.035,0.266-0.044,0.401
                                    c-0.013,0.228-0.019,0.448-0.031,0.673c-0.009,0.176-0.016,0.352-0.023,0.527c-0.038,0.906-0.063,1.798-0.063,2.648
                                    c0,69.842,39.475,121.143,108.877,142.518c4.879,29.567,29.728,52.474,60.185,54.37v67.722c0,8.111,6.576,14.688,14.688,14.688
                                    c8.111,0,14.688-6.577,14.688-14.688v-67.722c30.457-1.896,55.304-24.803,60.185-54.369c3.836-1.181,7.569-2.468,11.22-3.829
                                    c49.749-18.563,82.226-53.733,93.355-100.662c0.781-3.297,1.461-6.652,2.031-10.064c0.422-2.526,0.803-5.075,1.109-7.661
                                    c0.773-6.576,1.163-13.344,1.163-20.297C439.75,151.943,439.741,151.331,439.722,150.71z M266.603,320.196h-21.206
                                    c-14.497,0-27.007-8.666-32.622-21.089h86.45C293.608,311.531,281.099,320.196,266.603,320.196z M409.878,164.725
                                    c-0.165,2.006-0.361,3.98-0.605,5.915c-0.021,0.166-0.046,0.326-0.068,0.491c-0.26,2.005-0.555,3.977-0.897,5.906
                                    c-0.007,0.044-0.016,0.087-0.025,0.129c-0.344,1.924-0.73,3.806-1.152,5.655c-0.028,0.123-0.053,0.251-0.082,0.376
                                    c-0.416,1.795-0.872,3.55-1.357,5.274c-0.054,0.194-0.106,0.392-0.162,0.585c-0.479,1.667-0.994,3.297-1.535,4.901
                                    c-0.078,0.232-0.154,0.466-0.234,0.698c-0.541,1.563-1.112,3.095-1.708,4.597c-0.097,0.245-0.194,0.492-0.294,0.736
                                    c-0.601,1.481-1.229,2.93-1.882,4.351c-0.112,0.244-0.225,0.488-0.338,0.73c-0.661,1.41-1.347,2.792-2.056,4.146
                                    c-0.119,0.228-0.241,0.452-0.361,0.679c-0.723,1.353-1.467,2.681-2.237,3.977c-0.119,0.201-0.241,0.398-0.36,0.598
                                    c-0.787,1.307-1.595,2.589-2.428,3.841c-0.109,0.163-0.22,0.323-0.33,0.486c-0.859,1.275-1.736,2.526-2.638,3.744
                                    c-0.078,0.106-0.16,0.21-0.239,0.314c-0.941,1.262-1.904,2.497-2.888,3.697c-0.025,0.031-0.051,0.06-0.076,0.091
                                    c-0.98,1.193-1.983,2.352-3.002,3.485c-0.078,0.087-0.153,0.176-0.231,0.261c-0.994,1.1-2.011,2.168-3.039,3.214
                                    c-0.123,0.125-0.247,0.254-0.37,0.38c-1.002,1.009-2.021,1.989-3.051,2.949c-0.157,0.147-0.314,0.295-0.471,0.441
                                    c-1.015,0.934-2.043,1.843-3.08,2.732c-0.178,0.153-0.357,0.305-0.536,0.458c-1.033,0.872-2.075,1.721-3.129,2.55
                                    c-0.188,0.148-0.376,0.295-0.564,0.442c-1.055,0.82-2.117,1.619-3.187,2.396c-0.189,0.137-0.379,0.273-0.568,0.408
                                    c-1.08,0.774-2.165,1.529-3.258,2.26c-0.181,0.12-0.361,0.238-0.54,0.358c-1.11,0.734-2.225,1.453-3.346,2.147
                                    c-0.154,0.095-0.31,0.188-0.464,0.283c-1.152,0.706-2.306,1.395-3.465,2.059c-0.112,0.063-0.223,0.125-0.336,0.188
                                    c-1.194,0.68-2.393,1.342-3.591,1.98c-0.047,0.025-0.094,0.05-0.141,0.073c-1.199,0.635-2.397,1.246-3.597,1.839
                                    c-0.104,0.051-0.209,0.106-0.313,0.156c-1.172,0.576-2.343,1.129-3.512,1.667c-0.148,0.069-0.298,0.14-0.447,0.207
                                    c-1.135,0.518-2.269,1.015-3.399,1.498c-0.181,0.078-0.361,0.156-0.542,0.232c-1.109,0.469-2.213,0.919-3.314,1.357
                                    c-0.192,0.076-0.385,0.153-0.579,0.229c-1.09,0.429-2.172,0.84-3.25,1.237c-0.197,0.072-0.392,0.144-0.589,0.216
                                    c-1.075,0.392-2.141,0.768-3.202,1.131c-0.187,0.063-0.372,0.126-0.558,0.189c-1.066,0.361-2.125,0.708-3.174,1.04
                                    c-0.165,0.053-0.328,0.103-0.492,0.154c-1.063,0.333-2.118,0.655-3.158,0.961c-0.132,0.038-0.263,0.076-0.397,0.115
                                    c-1.069,0.311-2.128,0.611-3.171,0.893c-0.075,0.021-0.148,0.04-0.222,0.06c-1.091,0.295-2.169,0.577-3.227,0.842H199.581
                                    c-1.053-0.264-2.127-0.545-3.215-0.839c-0.079-0.022-0.159-0.043-0.238-0.063c-1.041-0.282-2.102-0.582-3.171-0.893
                                    c-0.129-0.038-0.257-0.075-0.388-0.113c-1.043-0.305-2.099-0.629-3.164-0.962c-0.163-0.051-0.325-0.1-0.488-0.153
                                    c-1.047-0.332-2.106-0.68-3.173-1.04c-0.188-0.063-0.375-0.126-0.564-0.191c-1.056-0.361-2.121-0.737-3.193-1.128
                                    c-0.2-0.072-0.4-0.147-0.599-0.22c-1.072-0.395-2.15-0.805-3.234-1.229c-0.2-0.078-0.401-0.159-0.602-0.238
                                    c-1.091-0.433-2.186-0.88-3.286-1.345c-0.194-0.082-0.388-0.166-0.582-0.25c-1.115-0.476-2.234-0.968-3.355-1.478
                                    c-0.167-0.076-0.335-0.156-0.502-0.234c-1.15-0.529-2.303-1.072-3.456-1.639c-0.126-0.062-0.251-0.126-0.377-0.188
                                    c-1.16-0.574-2.321-1.166-3.48-1.779c-0.093-0.048-0.187-0.098-0.279-0.148c-1.157-0.615-2.313-1.254-3.468-1.911
                                    c-0.138-0.078-0.276-0.154-0.414-0.234c-1.132-0.649-2.262-1.323-3.389-2.014c-0.182-0.112-0.366-0.222-0.548-0.335
                                    c-1.096-0.679-2.186-1.381-3.27-2.099c-0.207-0.137-0.413-0.272-0.62-0.41c-1.066-0.714-2.127-1.451-3.18-2.206
                                    c-0.217-0.156-0.435-0.311-0.652-0.469c-1.044-0.758-2.081-1.538-3.109-2.335c-0.216-0.167-0.432-0.336-0.648-0.507
                                    c-1.025-0.808-2.043-1.636-3.049-2.487c-0.207-0.175-0.413-0.351-0.618-0.527c-1.012-0.867-2.014-1.752-3.002-2.663
                                    c-0.185-0.17-0.369-0.345-0.554-0.517c-1.003-0.936-1.996-1.892-2.973-2.874c-0.153-0.153-0.301-0.31-0.454-0.464
                                    c-1.002-1.019-1.99-2.059-2.96-3.13c-0.106-0.116-0.209-0.238-0.314-0.354c-0.974-1.085-1.931-2.194-2.87-3.333
                                    c-0.072-0.088-0.145-0.175-0.217-0.263c-0.943-1.152-1.864-2.335-2.769-3.544c-0.103-0.138-0.209-0.273-0.311-0.411
                                    c-0.883-1.193-1.742-2.418-2.584-3.666c-0.126-0.188-0.256-0.373-0.382-0.563c-0.817-1.226-1.607-2.485-2.381-3.767
                                    c-0.137-0.226-0.275-0.449-0.408-0.677c-0.755-1.275-1.486-2.579-2.197-3.907c-0.134-0.25-0.267-0.498-0.398-0.751
                                    c-0.699-1.334-1.375-2.695-2.025-4.085c-0.122-0.261-0.245-0.524-0.366-0.789c-0.645-1.406-1.266-2.838-1.859-4.299
                                    c-0.106-0.261-0.21-0.524-0.314-0.789c-0.59-1.489-1.157-3.005-1.692-4.556c-0.084-0.244-0.165-0.491-0.247-0.734
                                    c-0.538-1.592-1.049-3.211-1.525-4.866c-0.059-0.204-0.113-0.411-0.17-0.615c-0.483-1.717-0.937-3.462-1.351-5.249
                                    c-0.031-0.131-0.057-0.264-0.087-0.395c-0.42-1.842-0.805-3.718-1.147-5.634c-0.009-0.047-0.018-0.093-0.026-0.14
                                    c-0.342-1.931-0.639-3.907-0.899-5.916c-0.021-0.159-0.046-0.314-0.065-0.474c-0.245-1.943-0.444-3.928-0.608-5.944
                                    c-0.013-0.153-0.026-0.306-0.04-0.46h307.838C409.907,164.405,409.891,164.565,409.878,164.725z"/>
                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </div>
`

// right icons ):
const iconDown = `
<div class="iconBoxSvg" id="IDown">
                    <?xml version="1.0" ?><svg width="35px" height="35px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="layer1"><path d="M 2 5.2929688 L 1.2929688 6 L 10 14.707031 L 18.707031 6 L 18 5.2929688 L 10 13.292969 L 2 5.2929688 z " style="fill:rgb(24, 79, 181); fill-opacity:1; stroke:none; stroke-width:0px;"/></g></svg>
                </div>
`;
const iconRight1 = `
<div class="iconBoxSvg moveright  openedLogin">
                    <svg width="35px" height="35px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:rgb(24, 79, 181);}</style></defs><title>log-in</title><g id="log-in-Filled"><path id="log-in-Filled-2" data-name="log-in-Filled" class="cls-1" d="M21,7V17a5.006,5.006,0,0,1-5,5H12a1,1,0,0,1,0-2h4a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3H12a1,1,0,0,1,0-2h4A5.006,5.006,0,0,1,21,7Zm-6.293,4.293-4-4A1,1,0,1,0,9.293,8.707L11.586,11H4a1,1,0,0,0,0,2h7.586L9.293,15.293a1,1,0,1,0,1.414,1.414l4-4A1,1,0,0,0,14.707,11.293Z"/></g></svg>
                </div>
`;
const iconRight2 = `
<a href="./indexProducts.html"> 
<div class="iconBoxSvg moveright">
                    <svg class="svgicons" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                        viewBox="0 0 502 502" style="enable-background:new 0 0 502 502;" xml:space="preserve">
                            <g>
                            	<g>
                            		<path d="M500.401,125.623c-1.842-2.853-5.005-4.575-8.401-4.575H66.964c-3.005,0-5.852,1.352-7.751,3.682
                            			c-1.899,2.329-2.649,5.39-2.044,8.333l39.436,191.704c0.957,4.649,5.049,7.985,9.795,7.985h299.059
                            			c3.931,0,7.497-2.303,9.114-5.886l86.541-191.704C502.511,132.067,502.243,128.476,500.401,125.623z M399.001,312.752H114.552
                            			l-5.35-26.009h218.48c5.523,0,10-4.478,10-10s-4.477-10-10-10H105.305c-0.073,0-0.143,0.009-0.215,0.011l-6.029-29.307h214.38
                            			c5.523,0,10-4.478,10-10s-4.477-10-10-10H94.947l-6.477-31.486h216.208c5.523,0,10-4.478,10-10s-4.477-10-10-10H84.355
                            			l-5.125-24.913h397.284L399.001,312.752z"/>
                            		<path d="M61.343,102.513c5.419-1.067,8.946-6.325,7.879-11.744l-6.688-33.953c-0.923-4.688-5.034-8.067-9.812-8.067H10
                            			c-5.523,0-10,4.478-10,10s4.477,10,10,10h34.5l5.099,25.886c0.939,4.767,5.12,8.069,9.801,8.069
                            			C60.041,102.703,60.691,102.641,61.343,102.513z"/>
                            		<path d="M166.102,353.284c-27.561,0-49.984,22.423-49.984,49.984c0,27.561,22.423,49.983,49.984,49.983
                            			c27.562,0,49.984-22.423,49.984-49.983C216.086,375.707,193.664,353.284,166.102,353.284z M166.102,433.252
                            			c-16.533,0-29.984-13.45-29.984-29.983s13.451-29.984,29.984-29.984c16.534,0,29.984,13.451,29.984,29.984
                            			S182.636,433.252,166.102,433.252z"/>
                            		<path d="M343.566,353.284c-27.561,0-49.984,22.423-49.984,49.984c0,27.561,22.423,49.983,49.984,49.983
                            			s49.984-22.423,49.984-49.983C393.55,375.707,371.127,353.284,343.566,353.284z M343.566,433.252
                            			c-16.533,0-29.984-13.45-29.984-29.983s13.451-29.984,29.984-29.984s29.984,13.451,29.984,29.984S360.099,433.252,343.566,433.252
                            			z"/>
                            		<path d="M352.877,185.961h35.054c5.523,0,10-4.478,10-10s-4.477-10-10-10h-35.054c-5.523,0-10,4.478-10,10
                            			S347.354,185.961,352.877,185.961z"/>
                            	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </div>
                </a>
`;
const iconRight3 = `
<div class="iconBoxSvg moveright  iconRight33">
                    <svg width="35px" height="35px" viewBox="0 -0.42 95.125 95.125" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_13" data-name="Group 13" transform="translate(-825.375 -463.025)">
                          <path id="Path_21" data-name="Path 21" d="M882.7,473.2a33.339,33.339,0,1,1-44,0A33.367,33.367,0,0,1,882.7,473.2Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_22" data-name="Path 22" d="M850.8,510.5a14.885,14.885,0,0,1,5.8-28.6" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_23" data-name="Path 23" d="M894.5,526.1l-5.3,5.3a5.191,5.191,0,0,1-7.3,0h0a5.191,5.191,0,0,1,0-7.3l5.3-5.3a5.191,5.191,0,0,1,7.3,0h0A5.191,5.191,0,0,1,894.5,526.1Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <path id="Path_24" data-name="Path 24" d="M917,553.8h0a5.07,5.07,0,0,1-7.2,0l-17.3-17.3a5.07,5.07,0,0,1,0-7.2h0a5.07,5.07,0,0,1,7.2,0L917,546.6A5.07,5.07,0,0,1,917,553.8Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_5" data-name="Line 5" x2="31.3" transform="translate(871.8 481.3)" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                      </svg>
                </div>
`;


// creat navbar ):
const navBar = document.createElement('div');
navBar.classList.add('boxContainer')
navBar.innerHTML = `
<section class="navbarLeft"> ${iconBars}  ${iconLeft1} ${iconLeft3} ${iconLeft2} ${iconLeft4} ${iconLeft5} ${iconLeft6} </section>

<section class="navbarName"> ${iconName1} ${NameName} ${iconName2} </section>

<section class="navbarRight"> ${iconDown} ${iconRight1} ${iconRight2} ${iconRight3} </section>
`;

// append navbar in header ):
NAVBAR.append(navBar);





// events for navbar left ):
const IBars = document.getElementById('iconBars');
const navbarLeft = document.querySelector('.navbarLeft');  
const moveleft = document.querySelectorAll('.moveleft')


IBars.addEventListener('click' , () => {
  navbarLeft.classList.toggle('openNavbarLeft');

  moveleft.forEach(move => {
    move.classList.toggle('dontMoveleft')
  })
});

// events for navbar righ ):
const IDown = document.getElementById('IDown');
const navbarRight = document.querySelector('.navbarRight'); 
const moveright = document.querySelectorAll('.moveright');

IDown.addEventListener('click' ,() => {
  navbarRight.classList.toggle('openNavbarRight');
  IDown.classList.toggle('change');

  moveright.forEach(move => {
    move.classList.toggle('dontMoveright')
  })
});


// home btn ):
const homeBtn = document.querySelector('#homeBtn');

homeBtn.addEventListener('click' , () => {
  window.scrollTo({
    top: 0 ,
    behavior: 'smooth',
  })
})


// search box  ):

const searchHome = document.querySelector('.searchHome');

const SSS = document.createElement('div');
SSS.classList.add('searching');
SSS.innerHTML = `
<fieldset class="searchBox">
                <legend> Searching </legend>
                 <input type="search" spellcheck="false">
                 <buttom>
                 <svg width="50px" heigth="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    	 viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
                    <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                    	c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                    	C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                    	S32.459,40,21.983,40z"/>
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </buttom>
             </fieldset> 
             <div class="closeSearch">
                     <svg class="svgSearch" width="60px" height="60px" fill="none" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"> -->
                         <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="#fff"></path>
                     </svg>
             </div>
`;

searchHome.append(SSS);

// open search box ):
const searching = document.querySelector('.searching');
const iconRight33 = document.querySelector('.iconRight33');

iconRight33.addEventListener('click' , () => {
    searching.classList.add('showNin');

    navbarRight.classList.toggle('openNavbarRight');
    IDown.classList.toggle('change');
  
    moveright.forEach(move => {
      move.classList.toggle('dontMoveright')
    });
});
   

//close search box ):

const inputSearching = document.querySelector('.searchBox input');
const svgSearching = document.querySelector('.closeSearch');

svgSearching.addEventListener('click' , () => {
    searching.classList.remove('showNin');
    inputSearching.value = '';
})

// main searching ):
const searchbtn = document.querySelector('.searchBox buttom');


searchbtn.addEventListener('click',()=>{

  let FirstValueInpute = String(inputSearching.value);
  let EndValueInpute = FirstValueInpute.toLowerCase();
  
  lookFor(EndValueInpute);
})


//lim.includes(pin)
function lookFor(ValueI) { 

  function nextClickSearch(scroolet) {
    location.href = `${scroolet}`;
    inputSearching.value = ''
    searching.classList.remove('showNin');
  }

  function homeLook() {
    window.scrollTo(0,0);
    inputSearching.value = ''
    searching.classList.remove('showNin');
  }

  // home Look for search box ):
  ValueI == 'home' && homeLook();

  // discount Look for search box ):
  const discountLook = ['discount' , 'discounts' , 'redate' , 'alleviation' , 'cut' , 'relaxation' , 'damping' , 'black friday' ] ;
  discountLook.includes(ValueI) ? nextClickSearch('#discount') : inputSearching.value = '';

  // aboute Look for search box ):
  const abouteLook = ['aboute' , 'aboute us' , 'yours' ] ;
  abouteLook.includes(ValueI) && nextClickSearch('#aboute') ;

  // comment Look for search Box ):
  const commentLook = ['comment' , 'comments' , 'Opinion' , 'view' , 'look']; 
  commentLook.includes(ValueI) && nextClickSearch('#comments') ;
  
  // shop Look for search box ):
  const shopLook = ['shop' , 'shoop' , 'shooping' , 'order' , 'ordering' , 'buy'];
  shopLook.includes(ValueI) && nextClickSearch('#shop') ;
  
  // us Look for search Box ):
  const usLook = ['us' , 'location' , 'locations' , 'instagram' , 'twiter' , 'telegram' , 'number' , 'numbers'];
  usLook.includes(ValueI) && nextClickSearch('#us') ;

  // products Look for search box ):
  const productsLook = ['products' , 'wine' , 'wines' , 'cigarett' , 'marijuana' , 'coantino' , 'mim jolien' , 'lopik ko' ,
   'yolomik' , 'pilo nin' , 'asfeg jilop' , 'blaku cigarettes' , 'six sixim' , 'lop wib' , 'fagloq' , 'krumbach' , 'wenta' ,
    'glenfiddich' , 'kiling w' , 'nobilo' , 'k wine' , 'savege' , 'adriana' , 'vopiko & amik' , 'v&a' , 'mirro w' , 'black w' , 'sicako' , 'clax w' ];
  productsLook.includes(ValueI) && ProLookG() ;

  function ProLookG() {
    window.location = 'indexProducts.html';
    inputSearching.value = '';
  };

  const logLook = ['login' , 'log in' , 'singup' , 'sing up' , 'log in sing up'];
  logLook.includes(ValueI) && sirchinlog() ;
  function sirchinlog() {
    searching.classList.remove('showNin');
    inputSearching.value = '';
    loginBox.classList.add('openlog');
  }
} 



// login singUp section ):

// ceate login and sing up ):
const login = document.querySelector('.login');

const loginBox = document.createElement('div');
loginBox.classList.add('loginBox');

loginBox.innerHTML = `
            <div class="loginContainer">
                <h3>C . A . W</h3>
                <fieldset>
                    <legend>log in</legend>
                    <input type="text" placeholder="phone number or gmail" spellcheck="false">
                    <input type="password" placeholder="password" spellcheck="false">
                    <a href="" class="btnLog">Log in</a>
                </fieldset>
                <div class="changeLogSing">
                    <h3>Dont havean account? <button class="goSing">sing up</button></h3>
                </div>
            </div>

            <div class="singupContainer">
                <h3>C . A . W</h3>
                <fieldset>
                    <legend>sing up</legend>
                    <input type="text" placeholder="full name" spellcheck="false">
                    <input type="text" placeholder="user name" spellcheck="false">
                    <input type="password" placeholder="password" spellcheck="false">
                    <a href="" class="btnLog">Sing up</a>
                </fieldset>
                <div class="changeLogSing">
                    <h3>havean account? <button class="goLog">Log in</button></h3>
                </div>
            </div>

            <div class="closeLogin">
                <svg class="svgLogin" width="60px" height="60px" fill="none" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"> -->
                    <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="#fff"></path>
                </svg>
            </div>
`;

login.append(loginBox);

// open log in ):
const openedLogin = document.querySelector('.openedLogin');

openedLogin.addEventListener('click',() => {

  loginBox.classList.add('openlog');


  navbarRight.classList.toggle('openNavbarRight');
    IDown.classList.toggle('change');
  
    moveright.forEach(move => {
      move.classList.toggle('dontMoveright')
    });
});

// close log in ):
const closeLogin = document.querySelector('.closeLogin');

closeLogin.addEventListener('click',() => {
  loginBox.classList.remove('openlog');
});

// change in login and sing up ):
const goLog = document.querySelector('.goLog');
const goSing = document.querySelector('.goSing');

const loginContainer = document.querySelector('.loginContainer');
const singupContainer = document.querySelector('.singupContainer');

goLog.addEventListener('click',() => {
  singupContainer.classList.remove('goS');
  loginContainer.classList.remove('goL');
});

goSing.addEventListener('click',() => {
  loginContainer.classList.add('goL');
  singupContainer.classList.add('goS');
});

// end ):

  









  
  

