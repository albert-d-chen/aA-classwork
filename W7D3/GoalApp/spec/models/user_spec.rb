require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    #it { should validate_presence_of(:password) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:password_digest) }

    #it { should validate_length_of(:password).is_at_least(6) }
    

    subject(:user) do 
       User.create!(username: 'rspec_user1', password: 'pass1234') 
    end

    
    describe "::find_by_credentials" do 
      context "valid username and password" do 
        it "returns user" do 
          user = User.create(username: 'rspec_user1', password: 'pass1234')
          expect(User.find_by_credentials('rspec_user1', 'pass1234')).to eq(user)
        end
      end

      context "invalid username or password" do 
        it "returns nil" do 
          expect(User.find_by_credentials('rspec_user', 'pass')).to be_nil 
          #expect(user).to be_nil
        end
      end
    end

    describe "#is_password?" do 
      user = User.create(username: 'rspec_user', password: 'pass1234')
      it "checks if password is right" do 
        expect(user.is_password?('pass1234')).to be true 
      end
    end

    describe 'password_reader' do 
      it 'should set password reader' do 
        expect(user.password).to eq('pass1234')
      end
    end 
    
    describe '#reset_session_token!' do 
      user = User.create(username: 'rspec_user', password: 'pass1234')
      oldtoken = user.session_token 
      newtoken = user.reset_session_token! 

      it 'return a new session token' do 
        expect(newtoken).to eq(user.session_token)
      end

      it 'checks if session token is reset and reassigned' do 
        expect(newtoken).not_to eq(oldtoken)
      end
    end

    
end
