import React from 'react';
import '../../css/style.css';
import '../../css/profileForm.css';
import { Form, Field } from 'react-final-form';
import userpick from '../../img/userpic.png';
import {required} from '../../validations';


const ProfileSideBarForm = ({
  saveSettings,
  closeForm,
  schools,
  teams,
  facilities,
  first_name,
  last_name,
  position,
  position2,
  age,
  weight,
  throws_hand,
  bats_hand,
  feet,
  inches,
  school,
}) => (
    <aside className="profile-aside">
      <div className="profile-info__userpic">
        <img src={userpick} alt="userpic" width="100" height="100" className="profile-info__userpic-img"/>
      </div>
      <Form
          onSubmit={saveSettings}
          render= {({handleSubmit, submitError}) => (

            <form onSubmit={handleSubmit}>
            <div className = 'profileFormWrap'>
              <Field
                className='userNameForm'
                name='first_name'
                component='input'
                type="text"
                placeholder="firstname"
                defaultValue={first_name}
                validate={required}
              />
              <Field
                className='userNameForm'
                name='last_name'
                component='input'
                type="text"
                placeholder="lastname"
                defaultValue={last_name}
                validate={required}
              />
            </div>
            <div className = 'profileSelectWrap'>
              <div>
                <Field
                  className = 'profileSelect'
                  name="position"
                  component="select"
                  validate={required}
                  defaultValue='catcher'
                >
                  <option selected value="catcher">Catcher</option>
                  <option value="first_base">First Base</option>
                  <option value="second_base">Second Base</option>
                  <option value="shortstop">Shortstop</option>
                  <option value="third_base">Third Base</option>
                  <option value="outfield">Outfield</option>
                  <option value="pitcher">pitcher</option>
                </Field>
              </div>
              <div>
                <Field
                  className = 'profileSelect'
                  name="position2"
                  component="select"
                  validate={required}
                  defaultValue='catcher'
                >
                  <option value="-">-</option>
                  <option value="catcher">Catcher</option>
                  <option value="first_base">First Base</option>
                  <option value="second_base">Second Base</option>
                  <option value="shortstop">Shortstop</option>
                  <option value="third_base">Third Base</option>
                  <option value="outfield">Outfield</option>
                  <option value="pitcher">pitcher</option>
                </Field>
              </div>
            </div>

            <div className = 'personalInfo'>
              Personal info
              <hr/>
            </div>
          
          <div>
            <div>
            <Field
              className='profileInput'
              name='age'
              component='input'
              type="text"
              placeholder="age"
              defaultValue={age}
              validate={required}
            />
            <div className = 'profileFormWrap'>
              <Field
                className='userNameForm'
                name='feet'
                component='input'
                type="text"
                placeholder="feet"
                defaultValue={feet}
                validate={required}
              />
              <Field
                className='userNameForm'
                name='inches'
                component='input'
                type="text"
                placeholder="inches"
                defaultValue={inches}
                validate={required}
              />
            </div>
            <Field
              className='profileInput'
              name='weight'
              component='input'
              type="text"
              placeholder="weight"
              defaultValue={weight}
              validate={required}
            />
            </div>
            <div className = 'profileFormWrap'>
              <Field className='userNameForm height' name="throws_hand" component="select" validate={required}>
                <option selected value="l">L</option>
                <option value="r">R</option>
              </Field>
              <Field className='userNameForm height' name="bats_hand" component="select" validate={required}>
                <option selected value="l">L</option>
                <option value="r">R</option>
              </Field>
              </div>
          </div>
            <div className = 'personalInfo'>
              School
              <hr/>
            </div>
            <div>
                <Field className = 'profileSelect' name="school" component="select" validate={required}>
                    { schools &&
                      schools.map((school, i) => (
                        <option selected key={i} value={school.id}>{school.name}</option>
                    ))}
                </Field>
                <Field 
                  className = 'profileSelect'
                  name="school_year"
                  component="select"
                  validate={required}
                  defaultValue = 'sophomore'>
                  <option value="sophomore">Sophomore</option>
                  <option value="freshman">Freshman</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="none">None</option>
                </Field>
                <Field className = 'profileSelect' name="teams" component="select" type="select" multiple validate={required}>
                    { teams &&
                        teams.map((team, i) => (
                          <option selected key={i} value={team.id}>{team.name}</option>
                    ))}
                </Field>
            </div>
            <div>
            <div className = 'personalInfo'>
              Facility
              <hr/>
            </div>
              <Field className = 'profileSelect' name='facilities' component="select" type="select" multiple validate={required}>
                { facilities &&
                  facilities.map((facilit, i) => (
                    <option key={i} value={facilit.id}>{facilit.u_name}</option>
                ))}
              </Field>
            </div>
            <div className = 'personalInfo'>
              About
              <hr/>
            </div>
            <Field
              className='profileTextArea'
              name="biography"
              component="textarea"
              placeholder="biography"
              defaultValue='test123'
              validate={required}
            />
            {submitError && <div>{submitError}</div>}
            {console.log(submitError)}
            <div className='profileFormWrap'>
              <button className='profileButton close' type="button" onClick={closeForm}>Cancel</button>
              <button className='profileButton save' type="submit">Save</button>
            </div>

            </form>
          )}
      />
    </aside>
);

export default ProfileSideBarForm;