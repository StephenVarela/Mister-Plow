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


end
