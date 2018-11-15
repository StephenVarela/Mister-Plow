require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_job_factory_is_valid
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    my_residence.save

    my_job = build(:job)
    my_job.residence = my_residence
    my_job.price = 30
    my_job.scheduled_time = DateTime.now + 50000

    assert(my_job.valid?)
  end

  def test_residence_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    my_residence.save

    my_job = build(:job)
    my_job.residence = my_residence

    expected = my_residence
    actual = my_job.residence

    assert_equal(expected, actual)
  end

  def test_residence_id_presence_validation
    my_job = build(:job)
    my_job.valid?
    assert_includes(my_job.errors.full_messages, 'Residence must exist')
  end

  def test_price_presence_validation
    my_job = build(:job)
    my_job.valid?
    assert_includes(my_job.errors.full_messages, "Price can't be blank")
  end

  def test_scheduled_time_presence_validation
    my_job = build(:job)
    my_job.valid?
    assert_includes(my_job.errors.full_messages, "Scheduled time can't be blank")
  end

  def test_validate_double_booking_check
    skip
    #create job
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    my_residence.save


    my_job = build(:job)
    my_job.residence = my_residence
    my_job.price = 30
    my_job.scheduled_time = DateTime.now + 50000
    my_job.save


    my_user2 = create(:user, email: 'Shoveler1') #must sucessfully save to database and have a valid id
    my_shoveler1 = build(:shoveler)
    my_shoveler1.user = my_user2
    my_shoveler1.save

    my_user3 = create(:user, email: 'Shoveler2') #must sucessfully save to database and have a valid id
    my_shoveler2 = build(:shoveler)
    my_shoveler2.user = my_user3
    my_shoveler2.save

    #shoveler 1 books the job
    p my_job
    p"----before first book----"
    p my_job
    p my_job.errors.full_messages
    my_job.update(shoveler: my_shoveler1)
    p"----after first book----"
    p my_job
    p my_job.errors.full_messages

    # shoveler 2 books the same job
    my_job.update(shoveler: my_shoveler2)
    p"----after second book----"
    p my_job
    p my_job.errors.full_messages

  end


end
